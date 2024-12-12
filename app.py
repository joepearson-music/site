import json
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
import yfinance as yf
from pydantic import BaseModel
from typing import Dict, List, Optional

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

POSITIONS_FILE = "positions.json"

def load_positions():
    if os.path.exists(POSITIONS_FILE):
        with open(POSITIONS_FILE, 'r') as f:
            data = json.load(f)
            return data.get("positions", {})
    return {}

def save_positions(positions):
    with open(POSITIONS_FILE, 'w') as f:
        json.dump({"positions": positions}, f, indent=2)

# Initialize positions from file
positions = load_positions()

class Position(BaseModel):
    symbol: str
    shares: float
    purchase_date: str
    purchase_price: float
    notes: Optional[str] = ""

@app.post("/api/positions/add")
async def add_position(position: Position):
    try:
        # Verify the symbol exists using yfinance
        ticker = yf.Ticker(position.symbol)
        info = ticker.info
        if not info:
            raise HTTPException(status_code=400, detail="Invalid symbol")
        
        positions[position.symbol] = position.dict()
        save_positions(positions)
        return {"message": f"Added position for {position.symbol}"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.delete("/api/positions/{symbol}")
async def remove_position(symbol: str):
    if symbol not in positions:
        raise HTTPException(status_code=404, detail="Position not found")
    
    del positions[symbol]
    save_positions(positions)
    return {"message": f"Removed position for {symbol}"}

@app.get("/api/positions")
async def get_positions():
    return positions

@app.get("/api/portfolio")
async def get_portfolio_data():
    try:
        end_date = datetime.now()
        portfolio_data = {}
        
        for symbol, position in positions.items():
            ticker = yf.Ticker(symbol)
            start_date = datetime.strptime(position["purchase_date"], "%Y-%m-%d")
            df = ticker.history(start=start_date, end=end_date)
            
            stock_data = []
            for index, row in df.iterrows():
                stock_data.append({
                    "date": index.strftime("%Y-%m-%d"),
                    "price": round(float(row["Close"]), 2)
                })
            
            if stock_data:
                current_price = stock_data[-1]["price"]
                entry_price = position["purchase_price"]
                total_return = ((current_price - entry_price) / entry_price) * 100
                
                portfolio_data[symbol] = {
                    "data": stock_data,
                    "metrics": {
                        "currentPrice": current_price,
                        "entryPrice": entry_price,
                        "entryDate": position["purchase_date"],
                        "shares": position["shares"],
                        "totalReturn": round(total_return, 2),
                        "currentValue": round(current_price * position["shares"], 2),
                        "totalGain": round((current_price - entry_price) * position["shares"], 2),
                        "notes": position["notes"]
                    }
                }
        
        return portfolio_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)