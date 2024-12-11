import React from "react";
import { Images } from "../../images/images"; // Update the import path based on your file location
import Dropdown from "../components/dropdown";
import JPIndex from "../components/jpindex";
import { Layout, styles } from "../components/layout";
import BuffettNotes from "./appendix/warren";

const customStyles = {
  ...styles,
  comparisonContainer: {
    display: "flex",
    gap: "40px",
    marginBottom: "25px",
    flexWrap: "wrap" as const,
  },
  comparisonColumn: {
    flex: 1,
    minWidth: "250px",
  },
  comparisonHeader: {
    ...styles.subHeader,
    marginTop: "15px",
  },
  comparisonList: {
    ...styles.list,
    listStyle: "none",
    paddingLeft: 0,
  },
  checkmark: {
    color: "green",
    marginLeft: "5px",
  },
  cross: {
    color: "red",
    marginLeft: "5px",
  },
};

const IRAComparison: React.FC = () => (
  <div style={customStyles.comparisonContainer}>
    <div style={customStyles.comparisonColumn}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h3 style={customStyles.comparisonHeader}>Traditional IRA</h3>
        <span style={{ color: "red", fontSize: "24px" }}>✗</span>
      </div>
      <ul style={customStyles.comparisonList}>
        <li style={styles.listItem}>Tax deductions on contributions</li>
        <li style={styles.listItem}>No tax while money is in account</li>
        <li style={styles.listItem}>distributions taxed as income</li>
      </ul>
    </div>
    <div style={customStyles.comparisonColumn}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h3 style={customStyles.comparisonHeader}>Roth IRA</h3>
        <span style={{ color: "green", fontSize: "24px" }}>✓</span>
      </div>
      <ul style={customStyles.comparisonList}>
        <li style={styles.listItem}>Taxes on contributed capital</li>
        <li style={styles.listItem}>No tax while money is in account</li>
        <li style={styles.listItem}>Not taxed on withdrawal</li>
      </ul>
    </div>
  </div>
);

const IRA: React.FC = () => (
  <Layout title="Stock Picks">
    <h2 style={styles.subHeader}>IRA Investment Picks</h2>
    <p style={styles.paragraph}>
      The objective of this project was to develop a methodology to select high
      quality IRA stocks. Let's first explore the IRA and why it is so
      important.
    </p>

    <h2 style={styles.subHeader}>What is an IRA?</h2>
    <p style={styles.paragraph}>
      Basically just a normal investment account but for retirement. There are a
      few different types, so lets give a quick overview to the advantages of
      the Roth.
    </p>

    <IRAComparison />

    <h2 style={styles.subHeader}>What type of stocks should go in an IRA?</h2>
    <p style={styles.paragraph}>
      The selection of stocks is dependent on the age of the buyer, risk
      aversion, and available information. Since these investments are for
      retirement they are longer term and shouldn't be based on market
      fluctuations. For this project I took inspiration from warren buffet, the
      greatest investor of all time as he has a pretty good track record for
      buying valuable stocks and holding them a long time.
    </p>

    <h2 style={styles.subHeader}>Methodology for Stock Selection</h2>
    <p style={styles.paragraph}>
      This is my third year for contributing to my IRA and I wanted to upgrade
      my investment methodology to ensure I was picking the best stocks for my
      strategy. For the stock selection I leveraged my student access to
      bloomberg terminals and the wisdom from Buffet.
    </p>

    <h3 style={styles.subHeader}>Buffetology</h3>
    <p style={styles.paragraph}>
      I am constantly consuming wisdom from Buffett and Munger in the form of
      podcasts or other books, shareholder letters etc. For this project I
      studied "Warren Buffet and the interpretation of financial statements" so
      I could understand more buffets process for stock selection to hopefully
      use the lessons learned for my own portfolio.
    </p>

    <h3 style={styles.subHeader}>Bloomberg</h3>
    <p style={styles.paragraph}>
      As a student at the university of pittsburgh I have the fortune of
      unlimited access to bloomberg terminals. Considering the hefty pricetag of
      25,000 annual subscription I wanted to ensure I was leveraging this for my
      own investments.
    </p>
    <p style={styles.paragraph}>
      I screened stocks on bloomberg and used the excel api to rank the screened
      out stocks
    </p>

    <h2 style={styles.subHeader}>Selected Stocks</h2>
    <p style={styles.link}>Year 1 Picks</p>
    <p style={styles.link}>Year 2 Picks</p>

    <p style={styles.paragraph}>
      After developing my strategy and screening and ranking the stocks I have
      developed my top 7 stocks for 2025. (7 stocks as the max contribution is
      7,000 for an individual filer, hence 7 bets of 1,000 each)
    </p>
    <p style={styles.paragraph}>
      I plan to continue this analysis every year in January as long as I have
      access to a bloomberg terminal.
    </p>

    <h2 style={styles.subHeader}>My top 7 stocks for 2025 are:</h2>
    <ol style={styles.list}>
      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
        <li key={num} style={styles.listItem}>
          Stock {num}
        </li>
      ))}
    </ol>

    <p style={styles.paragraph}>
      I screen thousands and thousands of stocks and many are still great
      investments, if you want to see the top 25 and conduct your own analysis
      to develop your own top 7 list, feel free to download this spreadsheet
      with the piotroski scores of all the screened stocks.
    </p>

    <h2 style={styles.subHeader}>Appendix</h2>
    <Dropdown
      title="Warren Buffett and the Interpretation of Financial Statements"
      icon={
        <img
          src={Images.warrenLogo}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
      }
    >
      <BuffettNotes />
    </Dropdown>

    <h2 style={styles.subHeader}>Appendix</h2>
    <Dropdown
      title="Warren Buffett and the Interpretation of Financial Statements"
      icon={<img src="warrenlogo" alt="" />}
    >
      <BuffettNotes />
    </Dropdown>

    <Dropdown title="Additional Resources" icon="file">
      <p style={styles.paragraph}>
        <a href="/signup" className="link">
          Sign up for emails from me about this stuff
        </a>
      </p>
    </Dropdown>

    <JPIndex />
  </Layout>
);

export default IRA;
