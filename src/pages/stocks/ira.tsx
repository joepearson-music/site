import compound1 from "../../images/compound1.png";
import compound2 from "../../images/compound2.png";
import { Images } from "../../images/images";
import Dropdown from "../components/dropdown";
import Figure from "../components/figure";
import { Layout, styles } from "../components/layout";
import Email from "../components/signup";
import Bloomberg from "./appendix/bloomberg";
import BuffettNotes from "./appendix/warren";

import { CSSProperties } from "react";

const customStyles: { [key: string]: CSSProperties } = {
  ...styles,
  comparisonContainer: {
    display: "flex",
    gap: "40px",
    marginBottom: "25px",
    flexWrap: "wrap",
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
  chartContainer: {
    width: "100%",
    marginBottom: "24px",
  },
};

const IRAComparison = () => (
  <div style={customStyles.comparisonContainer}>
    <div style={customStyles.comparisonColumn}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h3 style={customStyles.comparisonHeader}>Traditional IRA</h3>
        <span style={{ color: "red", fontSize: "24px" }}>✗</span>
      </div>
      <ul style={customStyles.comparisonList}>
        <li style={styles.listItem}>
          Contributions are tax deductible in the present
        </li>
        <li style={styles.listItem}>No tax while money is in account</li>
        <li style={styles.listItem}>Distributions taxed as income</li>
      </ul>
    </div>
    <div style={customStyles.comparisonColumn}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h3 style={customStyles.comparisonHeader}>Roth IRA</h3>
        <span style={{ color: "green", fontSize: "24px" }}>✓</span>
      </div>
      <ul style={customStyles.comparisonList}>
        <li style={styles.listItem}>Contributions are taxed in the present</li>
        <li style={styles.listItem}>No tax while money is in account</li>
        <li style={styles.listItem}>Tax free on withdrawal</li>
      </ul>
    </div>
  </div>
);

const IRA = () => (
  <Layout title="Stock Picks">
    <h2 style={styles.subHeader}>Finding the best IRA stocks</h2>
    <p style={styles.paragraph}>
      The objective of this project was to develop a methodology to select high
      quality IRA stocks. Let's first explore IRAs and why they are so
      important.
    </p>

    <h2 style={styles.subHeader}>What is an IRA?</h2>
    <p style={styles.paragraph}>
      An IRA or individual investment account is the money you set side for
      retirement. There are a few different types, so lets give a quick
      comparison of the Traditional vs Roth.
    </p>

    <IRAComparison />

    <p style={styles.paragraph}>
      The main difference between a Traditional and Roth IRA lie with the tax
      benefits. In the traditional IRA you are able to reduce your taxes in the
      present by putting the funds in your IRA, allowing you to report a lower
      income and pay less income tax. The Roth in contrast allows you to pay
      taxes now, or include the funds invested in your reported income but when
      you withdrawal you do not have to pay taxes. This is a huge advantage
      because you don't have to pay taxes on your compounded money.
    </p>

    <h2 style={styles.subHeader}>What is power of compounding?</h2>
    <p style={styles.paragraph}>
      An important consideration when making retirement account choices is the
      principle of compounding. Compounding refers to the invested capitals
      ability to compound on itself.
    </p>

    <Figure
      imageSrc={compound1}
      altText="42 years of compounding at a 10% rate"
      caption="47 years of compounding at a 10% rate"
    />

    <p style={styles.paragraph}>
      <strong>
        Wow an impressive $6,717,718.47 future value while only contribution
        $7000 a year (583.33 a month) or $335,812.
      </strong>
    </p>

    <Figure
      imageSrc={compound2}
      altText="42 years of compounding at a 10% rate"
      caption="42 years of compounding at a 10% rate"
    />

    <p style={styles.paragraph}>
      <strong>
        In this scenario you still managed to save $4,144,654.29 of future value
        while only contribution $308,832.
      </strong>
    </p>

    <p style={styles.paragraph}>
      So simply by no investing the first 5 years, you effectively lost out on
      $2,573,064.18 which was created by the first 26,980 invested. (335k -
      308k)
    </p>

    <h2 style={styles.subHeader}>Important Considerations</h2>
    <ol style={styles.list}>
      <li style={styles.listItem}>
        If you were paying close attention to the charts you would notice that
        the total value did not reach 1 million until just a few years before
        year 30 - in other words the compounding doesn't take effect for a good
        bit, you will not see millions in your account tomorrow. To receive the
        affect of compound you must be consistent and diligent with your
        investments.
      </li>
      <li style={styles.listItem}>
        A 10% return is the market average small changes in the compounding rate
        can lead to big jumps in future value. For example a 15% return from
        ages 18-65 would return $38,173,059.30. This is much more than the 6
        million at 10%. But the same principle applies in the reverse, a 5%
        return is only $1,315,465.27. The key here is to be careful and not drop
        below the market rate.
      </li>
    </ol>

    <h2 style={styles.subHeader}>What type of stocks should go in an IRA?</h2>
    <p style={styles.paragraph}>
      The selection of stocks is dependent on the age of the buyer, risk
      aversion, and available information. Since these investments are for
      retirement they are longer term and shouldn't be based on short term
      market fluctuations or macro factors. For this project I took inspiration
      from Warren Buffet, the greatest investor of all time as he has a pretty
      good track record for buying valuable stocks and holding them a long time.
    </p>

    <h2 style={styles.subHeader}>Methodology for Stock Selection</h2>
    <p style={styles.paragraph}>
      This is my third year to contribute to my Roth IRA and I wanted to upgrade
      my investment strategy to ensure I was picking the best stocks for my
      portfolio. For the stock selection I leveraged my student access to
      Bloomberg terminals and the lessons learned from Buffet.
    </p>

    <h3 style={styles.subHeader}>Selection Criteria</h3>
    <p style={styles.paragraph}>
      The selection criteria for the 7 stocks below is a 3 part process for
      screening and ranking stocks. It begins by using the Bloomberg EQS screen
      to find a suitable list of securities to evaluate with more scrutiny. This
      restricts the list to US based securities that are are the top 50th
      percentile for a few metrics related to margin and cash flows. Then, after
      an initial list is built out they are put into the Piotroski ranking
      system. Initially I built out my own system of 7 metrics to rank the
      securities on but Piotroski developed a system that has been backtested
      better than me. Piotroski's April 2000 paper "Value Investing: The Use of
      Historical Financial Statement Information to Separate Winners from
      Losers," demonstrated that the Piotroski score method would have seen a
      23% annual return between 1976 and 1996 if the expected winners were
      bought and expected losers shorted.
    </p>

    <h2 style={styles.subHeader}>Selected Stocks</h2>

    <p style={styles.paragraph}>
      After developing my strategy and screening and ranking the stocks I have
      developed my top 7 stocks for 2025. (7 stocks as the max contribution is
      7,000 for an individual filer, hence 7 bets of 1,000 each)
    </p>

    <h2 style={styles.subHeader}>
      My top stocks for 2025 ranked by Piotroski F Score:
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border text-left">Piotroski F Score</th>
            <th className="p-2 border text-left">Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">8</td>
            <td className="p-2 border">NVIDIA Corp</td>
          </tr>
          <tr>
            <td className="p-2 border">7</td>
            <td className="p-2 border">Caterpillar Inc</td>
          </tr>
          <tr>
            <td className="p-2 border">7</td>
            <td className="p-2 border">Arista Networks Inc</td>
          </tr>
          <tr>
            <td className="p-2 border">7</td>
            <td className="p-2 border">Deckers Outdoor Corp</td>
          </tr>
          <tr>
            <td className="p-2 border">6</td>
            <td className="p-2 border">Birkenstock Holding Plc</td>
          </tr>
          <tr>
            <td className="p-2 border">6</td>
            <td className="p-2 border">Meta Platforms Inc</td>
          </tr>
          <tr>
            <td className="p-2 border">6</td>
            <td className="p-2 border">Duolingo Inc</td>
          </tr>
        </tbody>
      </table>
    </div>

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

    <Dropdown
      title="Bloomberg Terminal"
      icon={
        <img
          src={Images.bloombergIcon}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
      }
    >
      <Bloomberg />
    </Dropdown>

    <Dropdown
      title="More"
      icon={
        <img
          src={Images.bloombergIcon}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
      }
    >
      <Email />
    </Dropdown>
  </Layout>
);

export default IRA;
