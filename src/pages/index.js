import * as React from "react";
import "../assets/scss/home.scss";
import { Layout } from "../components/Layout";
import HomepageBanner from "../images/banner.png";
import { Trans, useTranslation } from "react-i18next";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql, Link } from "gatsby";
import Logo from "../images/stw-logo.png";
import { Graph } from "../components/Graph";
import { Helmet } from "react-helmet";
const IndexPage = ({ location }) => {
  const { languages, changeLanguage } = useI18next();

  return (
    <>
      <Layout location={location}>
        <Helmet title="Home | Scan the World" />
        <div className="home-center">
          {/* {languages.map((language, key) => {
          return (
            <React.Fragment key={key}>
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage(language);
                }}
                key={key}
              >
                {language}
              </Link>{" "}
              &nbsp;{" "}
            </React.Fragment>
          );
        })} */}
          <div className="homepage">
            <div className="banner">
              <div className={"logo "}>
                <img src={Logo} alt="logo" />
              </div>

              <p>
                Scan the World enables{" "}
                <Link to="/manifesto"> MetaReverse*</Link> with a{" "}
                <Link to="/manifesto">conscience</Link>; an{" "}
                <Link to="/manifesto">ecosystem for everyone</Link> to freely
                share digital, 3D scanned{" "}
                <Link to="/manifesto">cultural artefacts</Link> for physical 3D
                printing.
              </p>
              <Graph />
              {/* <div class="d-model-img">
              <img alt="scan the world banner" src={HomepageBanner} />
            </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default IndexPage;
