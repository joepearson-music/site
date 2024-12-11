import React from "react";
import { Images } from "../../../images/images";
import { styles } from "../../components/layout";

const BuffettNotes: React.FC = () => (
  <div>
    <h3 style={styles.subHeader}>
      Warren Buffett and the Interpretation of Financial Statements
    </h3>

    {/* Image container with styles to prevent compression */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
        objectFit: "contain", // Prevents distortion
      }}
    >
      <img
        src={Images.warrenLogo}
        alt="Warren Buffett"
        style={{
          maxWidth: "600px", // Adjust this value as needed
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Introduction to Buffetology
    </h4>
    <p style={styles.paragraph}>
      Value investing → Durable Competitive Advantage and time. While some focus
      on complex computer systems investing, exceptional companies make unique
      low-cost products or services that occupy a spot in the consumer's mind.
    </p>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        Higher durability is less expense which means more cash and less debt
      </li>
      <li style={styles.listItem}>Good margins, little debt, low R&D</li>
      <li style={styles.listItem}>Consistent earnings, growth in earnings</li>
    </ul>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Income Statement
    </h4>
    <p style={styles.paragraph}>Revenue - Expense = Profit</p>
    <p style={styles.paragraph}>2 Types of Companies:</p>
    <ol style={styles.list}>
      <li style={styles.listItem}>Long term competitive advantage</li>
      <li style={styles.listItem}>Mediocre</li>
    </ol>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        The gross profit margin of a durable company should be about 40%
      </li>
      <li style={styles.listItem}>
        Gross Profit Margin = Gross Profit / Total Rev
      </li>
      <li style={styles.listItem}>
        SGA should be less than 30% of total expenses
      </li>
      <li style={styles.listItem}>
        A company that doesn't need to spend a ton on R&D is in a better more
        profitable industry for shareholders
      </li>
      <li style={styles.listItem}>
        Aim for lower interest expense → signals low debt
      </li>
      <li style={styles.listItem}>
        A company that needs debt to operate isn't as competitive as one that
        generates cash every month
      </li>
      <li style={styles.listItem}>Look at pre-tax earnings → Equity theory?</li>
      <li style={styles.listItem}>Consistent positive net earnings</li>
      <li style={styles.listItem}>
        Gain or loss on sale of assets is a short term thing
      </li>
    </ul>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Balance Sheet
    </h4>
    <p style={styles.paragraph}>A = L + SE</p>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        Check the past 7 years cash numbers - has it gone up?
      </li>
      <li style={styles.listItem}>
        Increased inventory must also increase revenue
      </li>
      <li style={styles.listItem}>Lower % of net receivables to gross sales</li>
      <li style={styles.listItem}>Lower PPE costs</li>
      <li style={styles.listItem}>Lower tech is easier to compete in</li>
      <li style={styles.listItem}>Name or Brand is super important</li>
      <li style={styles.listItem}>
        Lower ROA and Higher Assets might have an advantage due to barrier to
        entry
      </li>
      <li style={styles.listItem}>High ROA might be dangerous</li>
      <li style={styles.listItem}>
        "Little or no long term debt often means a good long term bet"
      </li>
      <li style={styles.listItem}>
        Debt to SE Ratio = Total Liabilities / Shareholders Equity
      </li>
      <li style={styles.listItem}>Less than .8</li>
      <li style={styles.listItem}>ROE = Net Earnings / Shareholders Equity</li>
    </ul>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Cash Flow Statement
    </h4>
    <ul style={styles.list}>
      <li style={styles.listItem}>Operating</li>
      <li style={styles.listItem}>Investing</li>
      <li style={styles.listItem}>Capex</li>
      <li style={styles.listItem}>Financing</li>
      <li style={styles.listItem}>
        Smaller portion of net earnings on capex is better
      </li>
      <li style={styles.listItem}>&lt;25% of net earnings/capex</li>
      <li style={styles.listItem}>Dividends are taxed</li>
      <li style={styles.listItem}>
        More stock buybacks increase value per share
      </li>
    </ul>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Durable Competitive Advantage
    </h4>
    <p style={styles.paragraph}>
      Equity Bond theory: Value the return of the EPS on the purchase price and
      project a growth rate that the EPS will grow at. Take the original share
      price divided by projected EPS after growth rate.
    </p>
  </div>
);

export default BuffettNotes;
