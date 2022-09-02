import React, { useState } from "react";
import { Layout } from "../components/Layout";
import "../assets/scss/about.scss";
import { graphql, Link } from "gatsby";
import TribeImage from "../images/join-our-tribe.png";
import ReadManifestoImage from "../images/about/read-manifesto.png";
import AboutJonImage from "../images/about/about-jon.png";
import AboutElisaImage from "../images/about/about-elisa.png";
import AboutIshitaImage from "../images/about/about-ishita.png";
import { Helmet } from "react-helmet";
const About = ({ location, data }) => {
  const dataText = [
    " building a MetaReverse",
    " freeing heritage",
    " an ecosystem for all",
    " releasing creativity",
  ];
  let [currentText, setCurrentText] = useState("");
  useState(function () {
    StartTextAnimation(0);
  }, []);

  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 5000);
    }
    if (dataText[i] && i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      setCurrentText(text.substring(0, i + 1));

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 200);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 1000);
    }
  }

  return (
    <>
      <Layout location={location}>
        <Helmet title="About | Scan the World" />
        <div className="about-section">
          <h1 className="about-title">
            We are... {""}
            <span className="about-title primary">
              {currentText} <span aria-hidden="true" />
            </span>
          </h1>
          <div className="about-manifesto">
            <div className="info-images">
              <Link to="/manifesto" target="_blank">
                <img src={ReadManifestoImage} alt="read tribe" />
              </Link>
              <div>
                <a href={data.site.siteMetadata.tribe_url} target="_blank">
                  <img src={TribeImage} alt="join the manifesto" />
                </a>
              </div>
            </div>
            <div className="info-sections">
              <div className="info-section-1">
                <div className="info-section-content">
                  <div className="info-details">
                    <p>112,000,000+</p>
                    <p>views</p>
                  </div>
                </div>
              </div>
              <div className="info-section-2">
                <div className="info-section-content margin-b-0">
                  <div className="info-details">
                    <p>25,000+</p>
                    <p>artefacts freed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="about-para">
            <b>Scan the World</b> is the world’s largest ecosystem of free to
            download, 3D printable objects of cultural significance. Every
            object originates from 3D scan data, provided through a vast network
            of human beings from across the globe whose mission is to gain a
            greater understanding of our shared cultural heritage.
          </p>
          <div className="about-box-container">
            <div className="about-box">
              <div className="about-box-title">CULTURAL HERITAGE</div>
              <div className="about-box-details">
                Scan the World’s community collects stories from humanity in
                order to share various views on the importance and impact of
                culture, helping diversify our personal approach to art. This
                network provides a{" "}
                <b> safe space for culture to be shared and discovered</b>, no
                matter where in the world it comes from.
              </div>
            </div>
            <div className="about-box">
              <div className="about-box-title">ACCESSIBILITY</div>
              <div className="about-box-details">
                By putting in the time to ensure every object is{" "}
                <b>3D printable</b>, Scan the World ensures artifacts from
                around the world can be curated as a personal collection and
                brings facsimiles, and their stories, into anyone’s hands.
              </div>
            </div>
            <div className="about-box">
              <div className="about-box-title">EDUCATION</div>
              <div className="about-box-details">
                Cultural artifacts teach us snapshots of humanity’s history.
                When these objects are made accessible and interactive, and
                having access to them both physically and digitally, it makes it
                easier for us to understand how they were made and what they
                depict.
              </div>
            </div>
            <div className="about-box">
              <div className="about-box-title">PRESERVATION</div>
              <div className="about-box-details">
                Cultural artifacts teach us snapshots of humanity’s history.
                When these objects are made accessible and interactive, and
                having access to them both physically and digitally, it makes it
                easier for us to understand how they were made and what they
                depict.
              </div>
            </div>
          </div>
          <div className="about-team-container">
            <div className="about-member">
              <div className="member-image">
                <img src={AboutJonImage} alt="jon" />
              </div>
              <div className="about-member-name">Jonathan Beck</div>
              {/* <div className="about-member-name">aka Jonascan Beck</div> */}
              <div className="about-member-designation">Co-Founder</div>
              <div className="about-member-email">jon@myminifactory.com</div>
            </div>
            <div className="about-member">
              <div className="member-image">
                <img src={AboutElisaImage} alt="jon" />
              </div>
              <div className="about-member-name">Elisa D'Antona</div>
              {/* <div className="about-member-name">aka Elisa Scantona</div> */}
              <div className="about-member-designation">Project Manager</div>
              <div className="about-member-email">elisa@myminifactory.com</div>
            </div>
            {/* <div className="about-member">
              <div className="member-image">
                <img src={AboutIshitaImage} alt="jon" />
              </div>
              <div className="about-member-name">Ishita Jain</div>
              <div className="about-member-name">Scan The World India</div>
              <div className="about-member-designation">STW India Founder</div>
              <div className="about-member-email">stw@myminifactory.com</div>
            </div> */}
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
    site {
      siteMetadata {
        tribe_url
      }
    }
  }
`;

export default About;
