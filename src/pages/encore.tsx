import React from "react";
import { Layout, styles } from "../layout/layout";
import CustomSocialBar from "./components/socialbar";
import { Link } from "react-router-dom";

const Encore: React.FC = () => {
  return (
    <Layout title="Encore @ 310">
      <div style={{ color: "#000", background: "#fff", padding: "20px" }}>
        <p style={styles.paragraph}>
          If you are seeing this, it is because you were invited to the performance of my Jazz
          Orchestra composition <em>"Sassafrass"</em>. I am hosting an afterparty in my apartment
          that night, once the performance wraps up. There will be drinks, snacks, weed, and music.
          Please RSVP by texting me at <strong>267-333-3816</strong> so I know who is coming.
          The theme for the party is Orange, Black, and White. Please dress for the concert
          accordingly. If you want to BYOB and stay late, or just pop in and chat for a minute,
          feel welcome to do so.
          <br />
          <br />
          Thanks,<br />
          Joe
        </p>

        <h2 style={styles.subHeader}>Site Development 🛠️</h2>
        <div style={styles.note}>
          <p style={{ margin: 0 }}>
            Note: This site is still in development and constantly being updated!
          </p>
          <p style={{ margin: 0 }}>-</p>
          <p style={{ margin: 0 }}>
            P.S. click the teaser image on the home page to hear my debut album before it releases
          </p>
        </div>

        <CustomSocialBar />
      </div>
    </Layout>
  );
};

export default Encore;
