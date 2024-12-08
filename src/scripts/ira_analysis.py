# src/scripts/portfolio_analysis.py
import pandas as pd
import yfinance as yf
from datetime import datetime
import json
import os

def get_daily_values(positions, start_date):
    """Calculate daily portfolio values"""
    daily_values = []
    end_date = datetime.now()
    date_range = pd.date_range(start_date, end_date, freq='D')
    
    for date in date_range:
        daily_total = 0
        for symbol, pos in positions.items():
            try:
                ticker = yf.Ticker(symbol)
                hist = ticker.history(start=date, end=date + pd.Timedelta(days=1))
                if not hist.empty:
                    daily_total += pos['shares'] * hist['Close'].iloc[0]
            except Exception as e:
                print(f"Error getting price for {symbol} on {date}: {e}")
                continue
        
        if daily_total > 0:  # Only add if we got valid prices
            daily_values.append({
                'date': date.strftime('%Y-%m-%d'),
                'value': round(daily_total, 2)
            })
    
    return daily_values


def analyze_portfolio():
    # Read the transactions file
    print("Reading transaction data...")
    with open('public/transactions.json', 'r') as f:
        data = json.load(f)
    
    # Convert to DataFrame
    df = pd.DataFrame(data['BrokerageTransactions'])
    
    # Clean up the data
    df['Date'] = pd.to_datetime(df['Date'].str.split(' as of').str[0])
    df['Amount'] = df['Amount'].str.replace('$', '').str.replace(',', '').astype(float)
    df['Quantity'] = pd.to_numeric(df['Quantity'], errors='coerce')
    
    # Calculate positions for each symbol
    positions = {}
    print("\nCalculating positions...")
    
    for symbol in df[df['Symbol'].notna() & (df['Symbol'] != '')]['Symbol'].unique():
        print(f"Processing {symbol}...")
        symbol_txns = df[df['Symbol'] == symbol]
        
        # Calculate shares from buys and sells
        buys = symbol_txns[symbol_txns['Action'].isin(['Buy', 'Reinvest Shares'])]
        sells = symbol_txns[symbol_txns['Action'] == 'Sell']
        
        total_shares = buys['Quantity'].fillna(0).sum() - sells['Quantity'].fillna(0).sum()
        
        if total_shares > 0:
            # Calculate cost basis
            cost_basis = abs(buys['Amount'].sum())
            first_purchase = buys.iloc[-1]['Date']
            
            try:
                # Get current price from Yahoo Finance
                ticker = yf.Ticker(symbol)
                current_price = ticker.history(period='1d')['Close'].iloc[-1]
                
                # Get dividends since purchase
                dividends = ticker.dividends
                if not dividends.empty:
                    dividends.index = dividends.index.tz_localize(None)
                    relevant_dividends = dividends[dividends.index >= pd.Timestamp(first_purchase)]
                    total_dividends = (relevant_dividends * total_shares).sum()
                else:
                    total_dividends = 0
                
                positions[symbol] = {
                    'shares': total_shares,
                    'cost_basis': cost_basis,
                    'cost_per_share': cost_basis / total_shares,
                    'current_price': current_price,
                    'current_value': total_shares * current_price,
                    'total_dividends': total_dividends,
                    'first_purchase': first_purchase.strftime('%Y-%m-%d')
                }
                
            except Exception as e:
                print(f"Error getting data for {symbol}: {e}")
                continue
    
    # Calculate returns for each position
    results = []
    total_cost = 0
    total_value = 0
    total_dividends = 0
    
    print("\nCalculating returns...")
    for symbol, pos in positions.items():
        gain_loss = pos['current_value'] - pos['cost_basis']
        total_return = gain_loss + pos['total_dividends']
        percent_return = (total_return / pos['cost_basis']) * 100
        
        position_data = {
            'symbol': symbol,
            'shares': round(pos['shares'], 4),
            'cost_per_share': round(pos['cost_per_share'], 2),
            'current_price': round(pos['current_price'], 2),
            'cost_basis': round(pos['cost_basis'], 2),
            'current_value': round(pos['current_value'], 2),
            'total_dividends': round(pos['total_dividends'], 2),
            'gain_loss': round(gain_loss, 2),
            'total_return': round(total_return, 2),
            'percent_return': round(percent_return, 2),
            'purchase_date': pos['first_purchase']
        }
        
        results.append(position_data)
        total_cost += pos['cost_basis']
        total_value += pos['current_value']
        total_dividends += pos['total_dividends']
    
    # Sort by current value
    results.sort(key=lambda x: x['current_value'], reverse=True)
    
    # Calculate money invested (sum of all transfers in)
    money_invested = df[df['Action'] == 'MoneyLink Transfer']['Amount'].sum()
    
    # Get the earliest purchase date
    start_date = min(pos['first_purchase'] for pos in positions.values())
    start_date = pd.to_datetime(start_date)
    
    # Calculate daily values
    print("\nCalculating daily values...")
    daily_values = get_daily_values(positions, start_date)
    
    portfolio_data = {
        'holdings': results,
        'daily_values': daily_values,  # Add daily values to the output
        'totals': {
            'total_cost': round(total_cost, 2),
            'total_value': round(total_value, 2),
            'total_dividends': round(total_dividends, 2),
            'money_invested': round(money_invested, 2),
            'total_gain_loss': round(total_value - total_cost, 2),
            'total_return': round(total_value + total_dividends - total_cost, 2),
            'total_return_percent': round(((total_value + total_dividends - total_cost) / total_cost) * 100, 2),
            'last_updated': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
    }
    
    # Save the results
    with open('public/portfolio_data.json', 'w') as f:
        json.dump(portfolio_data, f, indent=2)
    
    # Print summary
    print("\nPortfolio Summary:")
    print("-" * 80)
    for pos in results:
        print(f"\n{pos['symbol']}:")
        print(f"  Shares: {pos['shares']}")
        print(f"  Cost/Share: ${pos['cost_per_share']:.2f}")
        print(f"  Current Price: ${pos['current_price']:.2f}")
        print(f"  Cost Basis: ${pos['cost_basis']:.2f}")
        print(f"  Current Value: ${pos['current_value']:.2f}")
        print(f"  Dividends: ${pos['total_dividends']:.2f}")
        print(f"  Total Return: ${pos['total_return']:.2f} ({pos['percent_return']:.2f}%)")
    
    print("\nTotal Portfolio:")
    print(f"Money Invested: ${portfolio_data['totals']['money_invested']:,.2f}")
    print(f"Cost Basis: ${portfolio_data['totals']['total_cost']:,.2f}")
    print(f"Current Value: ${portfolio_data['totals']['total_value']:,.2f}")
    print(f"Total Dividends: ${portfolio_data['totals']['total_dividends']:,.2f}")
    print(f"Total Return: ${portfolio_data['totals']['total_return']:,.2f}")
    print(f"Return Percentage: {portfolio_data['totals']['total_return_percent']}%")
    
if __name__ == "__main__":
    analyze_portfolio()