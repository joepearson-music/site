import bloom1 from "../../../images/bloom1.png";
import bloom2 from "../../../images/bloom2.png";
import bloom3 from "../../../images/bloom3.png";
import bloom4 from "../../../images/bloom4.png";
import bloom5 from "../../../images/bloom5.png";
import bloom6 from "../../../images/bloom6.png";
import { Images } from "../../../images/images";
import Figure from "../../components/figure";
import { styles } from "../../components/layout";

const Bloomberg = () => (
  <div>
    <h3 style={styles.subHeader}>Bloomberg Terminal</h3>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
        objectFit: "contain",
      }}
    >
      <img
        src={Images.bloombergIcon}
        alt="Bloomberg Terminal"
        style={{
          maxWidth: "600px",
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>

    <p style={styles.paragraph}>
      I am very fortunate that I was exposed to the Bloomberg terminal in my
      junior year at the University of Pittsburgh. I quickly realized this was
      one of the highest value skills I could learn early on. Below I have done
      my best to capture the exact methodology I used to screen these stocks.
    </p>

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      EQS Screen Methodology
    </h4>

    <p style={styles.paragraph}>
      The initial screen was designed to identify the highest quality stocks
      using the following criteria:
    </p>

    <Figure imageSrc={bloom1} altText="EQS Search" caption="EQS Bloomberg" />

    <Figure imageSrc={bloom2} altText="Blank EQS" caption="Blank EQS" />

    <ul style={styles.list}>
      <li style={styles.listItem}>
        US Traded Securities - Focusing on domestic market exposure
      </li>
      <li style={styles.listItem}>
        Top 25% of Operating Margin - Identifying companies with superior
        operational efficiency
      </li>
      <li style={styles.listItem}>
        EPS Growth - Ensuring consistent earnings performance
      </li>
      <li style={styles.listItem}>
        Cash Growth - Demonstrating strong cash generation capabilities
      </li>
      <li style={styles.listItem}>
        Debt/Equity Ratio below 0.8 - Maintaining conservative leverage levels
      </li>
    </ul>

    <Figure imageSrc={bloom3} altText="My EQS" caption="My EQS" />
    <Figure imageSrc={bloom4} altText="My EQS" caption="My EQS" />

    <h4 style={{ ...styles.subHeader, fontSize: "18px", marginTop: "15px" }}>
      Fundamental Scoring Analysis
    </h4>

    <p style={styles.paragraph}>
      After applying the initial screening criteria, I used Bloomberg's
      fundamental scoring analysis Excel template to further evaluate the
      remaining securities. This systematic approach helped identify the stocks
      with the highest potential based on multiple fundamental factors.
    </p>

    <Figure
      imageSrc={bloom5}
      altText="Bloomberg Scoring"
      caption="Bloomberg Scoring"
    />

    <p style={styles.paragraph}>
      The 156 securities that passed the initial screening were then analyzed
      using this scoring system to identify the top-ranked stocks with the
      highest overall scores.
    </p>

    <Figure
      imageSrc={bloom6}
      altText="Final List of 7 Stocks"
      caption="My EQS"
    />

    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <h4
        style={{ ...styles.subHeader, fontSize: "18px", marginBottom: "10px" }}
      >
        Key Benefits of Bloomberg Terminal Analysis
      </h4>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          Access to comprehensive financial data and analysis tools
        </li>
        <li style={styles.listItem}>
          Ability to screen stocks using multiple sophisticated criteria
        </li>
        <li style={styles.listItem}>
          Integration with Excel for detailed fundamental analysis
        </li>
        <li style={styles.listItem}>
          Real-time market data and company information
        </li>
      </ul>
    </div>
  </div>
);

export default Bloomberg;
