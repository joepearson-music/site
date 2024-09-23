import React from "react";
import { Link } from "react-router-dom";

const References: React.FC = () => {
  return (
    <div>
      <h2 style={styles.sectionTitle}>Sources:</h2>
      <ol style={styles.referencesList}>
        {references.map((ref) => (
          <li key={ref.id} style={styles.referencesListItem}>
            {ref.link ? (
              <a
                href={ref.link}
                style={styles.referencesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ref.text}
              </a>
            ) : (
              ref.text
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
const references = [
  {
    id: 1,
    text: 'Porter, Michael E., and Mark R. Kramer. "Creating Shared Value." Harvard Business Review, Jan. 2011, hbr.org/2011/01/the-big-idea-creating-shared-value.',
    link: "https://hbr.org/2011/01/the-big-idea-creating-shared-value",
  },
  {
    id: 2,
    text: '"GDFCF." Guanacaste Dry Forest Conservation Fund, www.gdfcf.org/. Accessed Dec. 2023.',
    link: "https://www.gdfcf.org/",
  },
  {
    id: 3,
    text: "Stan, K., Sanchez-Azofeifa, A. Deforestation and secondary growth in Costa Rica along the path of development. Reg Environ Change 19, 587–597 (2019).",
    link: "https://doi.org/10.1007/s10113-018-1432-5",
  },
  {
    id: 4,
    text: 'Konyn, Carol. "How Costa Rica Reversed Deforestation and Became an Environmental Model." Earth.Org, Earth.Org, 17 May 2023, earth.org/how-costa-rica-reversed-deforestation/.',
    link: "https://earth.org/how-costa-rica-reversed-deforestation/",
  },
  {
    id: 5,
    text: '"Costa Rica GDP 1960-2023." MacroTrends, www.macrotrends.net/countries/CRI/costa-rica/gdp-gross-domestic-product. Accessed 19 Dec. 2023.',
    link: "https://www.macrotrends.net/countries/CRI/costa-rica/gdp-gross-domestic-product",
  },
  {
    id: 7,
    text: '"2022 CLIMATE REPORT." BNP Paribas.',
    link: "https://group.bnpparibas/uploads/file/bnp_paribas_2022_climate_report.pdf",
  },
  {
    id: 8,
    text: '"Social Entrepreneurship." BNP Paribas, 19 Sept. 2023, group.bnpparibas/en/our-commitments/inclusion/social-entrepreneurship.',
    link: "https://group.bnpparibas/en/our-commitments/inclusion/social-entrepreneurship",
  },
  {
    id: 9,
    text: '"How Is Microfinance Performing Socially and Environmentally around the World?" BNP Paribas, Sept. 2023, group.bnpparibas/en/news/how-is-microfinance-performing-socially-and-environmentally-around-the-world.',
    link: "https://group.bnpparibas/en/news/how-is-microfinance-performing-socially-and-environmentally-around-the-world",
  },
  {
    id: 10,
    text: "Zioło, Magdalena & Spoz, Anna. (2022). Sustainable Adaptation of Companies Through Financial Markets. 10.1007/978-3-031-07398-4_7.",
  },
  {
    id: 11,
    text: "Gaither, Barbara & Austin, Lucinda & Collins, Morgan. (2018). Examining the Case of DICK's Sporting Goods: Realignment of Stakeholders through Corporate Social Advocacy. The Journal of Public Interest Communications. 2. 10.32473/jpic.v2.i2.p176.",
  },
];

const ElieWieselEssay: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>How businesses can build a better future</h1>

      <h2 style={styles.abstractTitle}>Abstract</h2>
      <p style={styles.abstract}>
        The goal of this paper is to show that businesses perform better if they
        incorporate sustainable and ethical business practices and
        Environmental, Social, and Governance (ESG) metrics into their business
        strategy. This paper shows it is actually advantageous for them to do
        so. We will explore 3 different businesses of different sizes. Diamond
        Tropical Hardwoods, is a small sustainable furniture and lumber company
        with a large environmental and social impact. Dicks Sporting Goods is a
        medium-sized business that has proven its corporate social
        responsibility and strong character/moral values. Finally, we will see
        BNP Paribas, a massive investment bank with a large social influence and
        impactful ESG initiatives. We will use these 3 cases to explore each of
        the different elements of ESG and business ethics and how they can
        benefit all stakeholders and increase the value of an organization.
      </p>
      <h2 style={styles.sectionTitle}>
        Shared Value in Sustainable Business Strategy
      </h2>
      <p style={styles.paragraph}>
        Businesses have been integral in value transfer in today's society. Most
        people go to work, their value or work is monetized by business, and
        they are compensated for it. This compensation may be used to purchase
        products or services to add value to one’s life. A successful business
        uses resources to create value and allocates its compensation or
        revenues to run effectively. Historically, business has been a
        profit-maximizing enterprise. Businesses aim to maximize value while
        minimizing costs and prioritizing short-term financial gain. This leads
        companies to miss important customer needs and ignore the broader
        influences that determine their long-term success. Businesses have an
        important decision to make. Will they continue to operate in a narrow
        focused profit maximization strategy or adopt a comprehensive social
        impact strategy? It is clear that businesses that implement strategies
        that consider social impact will be rewarded and outperform companies
        that do not consider the social and environmental impacts of their
        strategy. Michael E. Porter and Mark R. Kramer wrote in a Harvard
        Business Review Magazine article titled Creating Shared Value ” the
        solution lies in the principle of shared value, which involves creating
        economic value in a way that also creates value for society by
        addressing its needs and challenges. Businesses must reconnect company
        success with social progress. We believe that it can give rise to the
        next major transformation of business thinking.” [1]{" "}
      </p>

      <p style={styles.paragraph}>
        We look to sustainable business strategy to guide our decision-making.
        Operating an ethical business requires minimizing impacts on the planet,
        future generations, and society. Many investors now will use ESG metrics
        to evaluate companies as these considerations are valuable to understand
        a company's longevity. In this paper, I will review three different
        examples that have inspired me through their ethical and sustainable
        business practices. We explore environmental impact and ethical sourcing
        at Diamond Tropical Hardwoods, social impact and diversity initiatives
        at BNP Paribas, and corporate social responsibility at Dicks Sporting
        Goods and how their strategy does a fantastic job at creating shared
        value and impacting their communities while producing profits.
      </p>

      <h2 style={styles.sectionTitle}>
        How Diamond Tropical Hardwoods, a small family owned business, found
        success.{" "}
      </h2>
      <p style={styles.paragraph}>
        Businesses have been integral in value transfer in today's society. Most
        people go to work, their value or work is monetized by business, and
        they are compensated for it. This compensation may be used to purchase
        products or services to add value to one’s life. A successful business
        uses resources to create value and allocates its compensation or
        revenues to run effectively. Historically, business has been a
        profit-maximizing enterprise. Businesses aim to maximize value while
        minimizing costs and prioritizing short-term financial gain. This leads
        companies to miss important customer needs and ignore the broader
        influences that determine their long-term success. Businesses have an
        important decision to make. Will they continue to operate in a narrow
        focused profit maximization strategy or adopt a comprehensive social
        impact strategy? It is clear that businesses that implement strategies
        that consider social impact will be rewarded and outperform companies
        that do not consider the social and environmental impacts of their
        strategy. Michael E. Porter and Mark R. Kramer wrote in a Harvard
        Business Review Magazine article titled Creating Shared Value ” the
        solution lies in the principle of shared value, which involves creating
        economic value in a way that also creates value for society by
        addressing its needs and challenges. Businesses must reconnect company
        success with social progress. We believe that it can give rise to the
        next major transformation of business thinking.” [1]
      </p>
      <h2 style={styles.sectionTitle}>
        How Dick’s moral stance generated revenue and goodwill
      </h2>
      <p style={styles.paragraph}>
        Businesses are under more scrutiny than ever before. Social media has
        given the stakeholders and the public a new platform to voice their
        opinions. Businesses have always been involved in politics. Today, they
        must adopt core values and take clear stances on important issues. We
        will study the case of Dicks Sporting Goods and their response to the
        2018 shooting at Marjory Stoneman Douglas High School, in Parkland, FL.
        In response to the events, Dicks decided to stop selling assault-style
        rifles and only sell firearms to those 21 years and over. This decision
        changed the expectations for businesses and their corporate social
        advocacy.{" "}
      </p>
      <p style={styles.paragraph}>
        In a case study published by Elon University, it was discovered Dick’s
        decision to change policy regarding gun control was not driven by its
        primary stakeholders. [11] Instead, it was influenced by secondary
        stakeholders - individuals without direct influence on the company.
        Dicks even anticipated this. They were quoted saying, "We weren't
        expecting it to be a well-received decision by many of our customers."
        as many are gun owners. Despite this, Dicks took this opportunity to
        express their values as an organization. It was received well. An
        analysis of public comments on Dick’s Twitter account revealed, “Around
        70% of the tweets (n = 2,095) expressed gratitude or positive sentiment.
        Neutral (14.8%, n = 443) and negative attitudes (15.4%, n = 461) were
        present in fewer tweets.” [5] The positive tweets and support did not
        come without action. Many shoppers posted their gratitude and photos of
        themselves shopping at various Dick’s locations.{" "}
      </p>
      <p style={styles.paragraph}>
        In this case, we have seen how businesses that express moral and ethical
        values have a positive impact on their overall success. With the rise of
        social media and communication, it is important to stakeholders that the
        business communicates its mission, vision, and values to all.
      </p>
      <h2 style={styles.sectionTitle}>
        How BNP Paribas generates social impact as a bank
      </h2>
      <p style={styles.paragraph}>
        While banking hasn't typically been viewed as an ESG-focused industry,
        BNP Paribas stands out as a pioneer in driving sustainable development
        within the banking sector. Through their Corporate Social Responsibility
        (CSR) and Sustainable Development Strategy (SDS) they have been able to
        generate valuable impact. This includes 12 commitments implemented in 4
        areas: economy (effective financing of the economy), employees
        (responsible approach to employees and their development), society, and
        environment (supporting energy transformation and counteracting climate
        change). [7] BNP has a variety of social impacts which we will explore
        internally as well as externally. With over 200,000 employees in over 73
        countries, BNP’s social structure is very impactful as it can affect
        many people. Internally, the bank has committed to various diversity and
        inclusion programs developing friendly, comfortable work environments
        for all employees. This is apparent as their employee culture is focused
        on individual growth and social advocacy. Employees created a
        company-wide “Women Changing BNP Paribas,” the aim of which is to
        strengthen the role of women in the organization. This led to an
        initiative to have more women in executive committee positions and IT
        sectors while also promoting employee well-being through support
        programs. This creates a strong and motivated working culture and
        environment that leads to more productive and happy employees.
      </p>
      <p style={styles.paragraph}>
        Externally, the BNP has also been committed to maximizing its social
        impact. The bank is involved in many charities and supports a wide range
        of social groups and organizations. They have shown support for the
        LGBTQ+ community, either through flying their flags on buildings or
        removing gender requirements from credit cards. BNP is a leader in
        social impact bonds, supporting the development of innovative products
        such as the Impact Contract, a financial tool that helps finance social
        and environmental innovations through a new type of public-private
        partnership. [7] BNP Paribas allocated €333 million in 2022, through
        dedicated funds where they provided support to underprivileged
        populations and the development of small economic projects and in
        particular help women entrepreneurs in emerging countries. Microfinance
        institutions are a valuable door opener for those with an idea but with
        no access to conventional loans. These institutions have been able to
        provide over 280,000 beneficiaries, 95% of them women, the funds to
        start their business which to created over 1.3 million jobs since their
        start in 1989. [9]
      </p>
      <p style={styles.paragraph}>
        BNP Pariba's commitment to sustainability has continued to allow it to
        dominate and be the top bank in the European Union. The social
        initiatives of ESG and sustainability across business practices at BNP
        have allowed it to maintain to be a leader in the space, and it is
        refreshing to see a bank that is not conventionally associated with the
        environment or social impact have such an influence.
      </p>
      <h2 style={styles.sectionTitle}>Business and their performance</h2>
      <p style={styles.paragraph}>
        Businesses perform better when they minimize negative impacts and show
        moral and ethical values. From minimizing environmental impacts to
        implementing DEI (what is it)targets to being an activist, businesses
        are held accountable for all of their efforts. We have seen through
        these case studies how three different businesses in 3 completely
        different industries all yielded better returns as they implemented
        sustainable and ethical strategy components into their business model.
        We see firms that embody and abide by these components performing well
        over the long term and continuing to do well despite regulations and
        increased strictness. As we see a global shift in policy and mindset
        about our environment, these firms operating with ESG strategy and
        shared value in mind will be in a better position and be able to
        capitalize on this shift of values.
      </p>
      <h2 style={styles.sectionTitle}>Impacts</h2>

      <p style={styles.paragraph}>
        The impacts of implementing a sustainable business strategy are vital to
        addressing some of the world’s most pressing problems. Climate change,
        income inequality, depletion of natural resources, human rights issues,
        fair working conditions, pollution, racial injustice, and gender
        inequality are some common examples. Operating a business to address
        these issues will yield many benefits for the business and all
        stakeholders.
      </p>
      <p style={styles.paragraph}>
        TThe benefits of sustainable and ethical business models allow companies
        to minimize risks, develop a competitive advantage, take advantage of
        sustainable product growth opportunities, and create change. Through the
        use of these models, we can see that the risk a company faces actually
        decreases. In addition, being a sustainable brand/organization will help
        protect your corporate reputation and brand by building goodwill and
        trust with all stakeholders. If employees 8 are forced into unsafe
        working conditions and are injured or worse, the reputation of the
        company will be damaged. If you build your strategy around these
        principles, you will avoid these consequences and contribute towards the
        transition of our society. Sustainability does not hinder progress, it
        does the opposite. Businesses with strong purpose and mission actually
        attract higher quality candidates, as they value a purpose-driven and
        impactful work environment. As these values become more and more
        important to individuals and more companies begin to advertise and track
        their impact, the value of sustainable products will rise as well. When
        an organization has sustainability incorporated into its product, they
        are able to capture a larger market share, as those ESG-conscious
        stakeholders will not invest in damaging companies. Corporations should
        be held accountable as they are drivers of change. As an individual, it
        may seem daunting and impossible to leave your impact. Your personal
        impact may not seem like much in comparison to a multi-international
        corporation, but the individual role is much more important. As we have
        seen, businesses will continue to exploit to maximize profits. Consumers
        and stakeholders need to set a precedent for the expectations of
        business. Through this, massive impacts can be made. If a business is
        forced to change processes to be more ethical and sustainable, the true
        role of consumers is revealed. Whenever you look at an individual’s
        impacts, it does not seem like a lot, but consumer strength is in the
        numbers. If we come together and demand higher standards to ensure our
        planet and people are protected.
      </p>

      <h2 style={styles.sectionTitle}>
        My approach to business after these lessons
      </h2>

      <p style={styles.paragraph}>
        Our case studies show that businesses will be rewarded for transitioning
        into ethical and sustainable business models. Corporations are
        implementing more ESG strategy components, and stakeholders continue to
        reward them for doing so. I am currently studying and pursuing a career
        in business and aim to own my own business. These considerations are
        vital in decision-making about my career, industry, or business model. I
        have seen that businesses with a mission-driven sustainable model
        outperform others in the current market. The examples in this essay are
        just a few. There are many impactful businesses that are changing lives
        and innovating to make our world better. I recently started my first
        business venture and kept these principles in mind. Our company,
        Forevergreen will track users' carbon emissions and footprint through
        its simple carbon calculator. We will educate users about their overall
        carbon footprint and provide trustworthy carbon offset solutions to
        reach net-zero. Our company's goal is to educate as many people as
        possible about their carbon emissions, so they can understand what
        contributes most to global emissions and adjust their behavior. This
        could mean purchasing from verified net-zero companies instead of high
        emitters, adjusting habits to reduce overall carbon, or investing in
        carbon-backed securities like carbon offset credits. We offer planting
        trees directly through our reforestation projects. Our team understands
        the value of creating shared value and believes in lifting everyone up
        together. *Being selfish and profit-driven can only give you so much.*
        As an aspiring entrepreneur, I aim to build something that creates value
        in other people's lives, making the world a better place. I strongly
        believe that this new venture can do that. Carbon is the most well-known
        greenhouse gas and without understanding its impact on Earth in the
        future, as global temperatures rise, the environment and its resources
        will be invaluable. I have learned, through these businesses, and
        others, that a mission-driven impact-first model will allow me to build
        something I can be proud of.
      </p>
      <p style={styles.paragraph}>
        It is important that we as stakeholders learn about business practices
        and support those who do good. Stakeholders are the key to progress, and
        it is up to us to hold businesses accountable and 10 push them to be
        better. I am confident in our society and trust that people want to
        protect our earth and their fellow humans. I am excited to see the
        innovations in business as we develop our society.
      </p>

      <References />

      <Link to="/writing" style={styles.backLink}>
        Back to Writing
      </Link>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "times new roman",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  },
  subSectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "15px",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "15px",
    lineHeight: "1.5",
  },
  list: {
    marginLeft: "20px",
  },
  listItem: {
    marginBottom: "10px",
  },
  backLink: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#000",
  },
  image: {
    maxWidth: "75%",
    height: "auto",
    marginBottom: "20px",
    justifyContent: "center",
  },
  abstractTitle: {
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  abstract: {
    fontSize: "16px",
    marginBottom: "15px",
    lineHeight: "1.5",
    fontStyle: "italic",
  },
  referencesContainer: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  referencesList: {
    paddingLeft: "20px",
  },
  referencesListItem: {
    fontSize: "14px",
    marginBottom: "10px",
    lineHeight: "1.4",
  },
  referencesLink: {
    color: "#0066cc",
    textDecoration: "none",
  },
};

export default ElieWieselEssay;
