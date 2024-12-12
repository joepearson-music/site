import { Images } from "../../../images/images";
import { styles } from "../../components/layout";

const BuffettNotes = () => (
  <div>
    <h3 style={styles.subHeader}>
      Warren Buffett and the Interpretation of Financial Statements
    </h3>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
        objectFit: "contain",
      }}
    >
      <img
        src={Images.warrenLogo}
        alt="Warren Buffett"
        style={{
          maxWidth: "600px",
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>

    <p style={styles.paragraph}>
      The book is split up into 3 sections, an introduction and then a section
      on each of the 3 financial statements (Income Statement, Balance Sheet,
      and Statement of Cash Flows) with each of the important line items defined
      and related to Buffet's investment strategy.
    </p>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Introduction to Value Investing
    </h4>
    <p style={styles.paragraph}>
      Value investing is purchasing durable companies and holding them for a
      long time. While complex computer systems investing has taken over the
      market, exceptional companies make unique low-cost products or services
      that occupy a spot in the consumer's mind.
    </p>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        Higher durability reflects less expenses which means more cash and less
        debt
      </li>
      <li style={styles.listItem}>
        A good company has good margins, little debt, low R&D
      </li>
      <li style={styles.listItem}>
        Consistent earnings and growth in earnings are key indicators
      </li>
    </ul>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Income Statement Analysis
    </h4>
    <p style={styles.paragraph}>Revenue - Expense = Profit</p>
    <p style={styles.paragraph}>Companies fall into two categories:</p>
    <ol style={styles.list}>
      <li style={styles.listItem}>
        Companies with long term competitive advantage
      </li>
      <li style={styles.listItem}>Mediocre companies</li>
    </ol>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        The gross profit margin of a durable company should be about 40%
      </li>
      <li style={styles.listItem}>
        Gross Profit Margin = Gross Profit / Total Revenue
      </li>
      <li style={styles.listItem}>
        SG&A should be less than 30% of total expenses
      </li>
      <li style={styles.listItem}>
        Lower R&D spending often indicates a more profitable industry for
        shareholders
      </li>
      <li style={styles.listItem}>
        Low interest expense signals low debt dependency
      </li>
      <li style={styles.listItem}>
        Companies that need debt to operate aren't as competitive as those
        generating regular cash
      </li>
      <li style={styles.listItem}>Look for consistent positive net earnings</li>
      <li style={styles.listItem}>
        Be cautious of gains or losses on asset sales - they're short-term
        events
      </li>
    </ul>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Balance Sheet Indicators
    </h4>
    <p style={styles.paragraph}>Assets = Liabilities + Shareholders' Equity</p>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        Examine cash position trends over the past 7 years
      </li>
      <li style={styles.listItem}>
        Inventory increases should correlate with revenue growth
      </li>
      <li style={styles.listItem}>
        Look for a lower percentage of net receivables to gross sales
      </li>
      <li style={styles.listItem}>Lower PP&E costs are often preferable</li>
      <li style={styles.listItem}>
        Lower-tech industries often have easier competitive landscapes
      </li>
      <li style={styles.listItem}>
        Brand value and name recognition are crucial assets
      </li>
      <li style={styles.listItem}>
        Lower ROA with higher assets might indicate strong entry barriers
      </li>
      <li style={styles.listItem}>
        Very high ROA might signal competitive vulnerability
      </li>
      <li style={styles.listItem}>
        "Little or no long-term debt often means a good long-term bet"
      </li>
      <li style={styles.listItem}>
        Debt to Shareholders' Equity Ratio should be less than 0.8
      </li>
      <li style={styles.listItem}>ROE = Net Earnings / Shareholders' Equity</li>
    </ul>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Cash Flow Statement Insights
    </h4>
    <ul style={styles.list}>
      <li style={styles.listItem}>Focus on operating cash flow strength</li>
      <li style={styles.listItem}>Evaluate investing activities carefully</li>
      <li style={styles.listItem}>
        Capital expenditures should be less than 25% of net earnings
      </li>
      <li style={styles.listItem}>
        Consider the tax implications of dividends
      </li>
      <li style={styles.listItem}>
        Stock buybacks can increase per-share value
      </li>
    </ul>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Durable Competitive Advantage
    </h4>
    <p style={styles.paragraph}>
      The Equity Bond theory values the return of the EPS on the purchase price
      and projects a growth rate for the EPS. The calculation takes the original
      share price divided by projected EPS after applying the growth rate.
    </p>
    <p style={styles.paragraph}>
      <strong>Example with Coca-Cola:</strong> In the late 1980s, Warren bought
      shares for $6.50 with pre-tax earnings at $0.71. By 2007, Coke was trading
      between $45 and $64 with pre-tax earnings at $3.96.
    </p>
  </div>
);

export default BuffettNotes;
