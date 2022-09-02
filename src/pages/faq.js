import React from "react";
import { Layout } from "../components/Layout";
import "../assets/scss/faq.scss";
import MissionFaq from "../images/faq/mission-faq.png";
import WwuFaq from "../images/faq/work-with-us-faq.png";
import LicensingFaq from "../images/faq/licensing-faq.png";
import PhotogrammetryFsq from "../images/faq/photogrammetry-faq.png";
import { graphql, Link } from "gatsby";
import { Accordion } from "../components/Accordion";
import { Helmet } from "react-helmet";

const Faq = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Helmet title="FAQ | Scan the World" />
        <div className="faq-section">
          <h1>Frequently Asked Questions</h1>
          <div className="faq-product">
            <div className="image-wrap">
              <Link to="#programmetry" className="image">
                <img src={PhotogrammetryFsq} alt="Photogrammetry FAQ" />
                <div className="overlay" />
                <div className="faq-name">Photogrammetry</div>
              </Link>
            </div>
            <div className="image-wrap">
              <Link to="#licensing" className="image">
                <img src={LicensingFaq} alt="Licensing FAQ" />
                <div className="overlay" />
                <div className="faq-name">Licensing</div>
              </Link>
            </div>
            <div className="image-wrap">
              <Link to="#mission" className="image">
                <img src={MissionFaq} alt="Mission FAQ" />
                <div className="overlay" />
                <div className="faq-name">Mission</div>
              </Link>
            </div>
            <div className="image-wrap">
              <Link to="#wwu" className="image">
                <img src={WwuFaq} alt="Work with us FAQ" />
                <div className="overlay" />
                <div className="faq-name">Work With Us</div>
              </Link>
            </div>
          </div>
          <div className="faq-list">
            <div className="faq-group" id="programmetry">
              <h4>PHOTOGRAMMETRY</h4>
              <Accordion
                title={"How do I scan?"}
                description={
                  "Our community scans are usually realised via photogrammetry. We have a section on our website where you can read more about it and learn how to scan. We have also released a video tutorial that explains how to scan and how the uploading process works here."
                }
              />
              <Accordion
                title={"I don’t have a professional camera, can I still scan?"}
                description={
                  "Of course yes! You can use a smartphone camera as long as it takes good quality pictures. To give you an example, an iphone 7 camera works perfectly!"
                }
              />
              <Accordion
                title={"How do I create a 3d model?"}
                description={
                  "If you scanned an object via photogrammetry, you can create and upload a 3D model using Beholder Vision. After that, we will review the object, make sure it is printable and approve it."
                }
              />
            </div>
            <div className="faq-group" id="licensing">
              <h4>LICENSING</h4>
              <Accordion
                title={
                  "How can I use the models that I download from scan the world? Can I use them for commercial purposes?"
                }
                description={
                  "While all of our models are freely available and downloadable, some of them are not allowed to be used for commercial purposes. Many of our models are available as CC0, this means that they can be used as you please (including commercial purposes). The key is to check the licence before downloading and using the models so that you can be sure how those models can be used. We are working with the artists who share their IP with the community. Please do not use these for commercial use."
                }
              />
              <Accordion
                title={
                  "Do I need permission to scan objects in museums using photogrammetry?\n"
                }
                description={
                  "When working with artworks whose artist has been dead for at least the past 70 years, the work is in the public domain. Therefore, asking for authorization in order to take pictures is not required. All considered, every museum has a different policy and this also changes depending on the country. It is important to scan keeping in mind the general museum’s rules and respecting the artworks."
                }
              />
            </div>
            <div className="faq-group" id="mission">
              <h4>MISSION</h4>
              <Accordion
                title={"Why are you doing this? What is your purpose?"}
                description={
                  "As a non-profit, community based initiative, we focus a lot on our mission to answer this question. We believe in culture, in art, in knowledge, and we believe that all of this must be accessible from everywhere to everyone. Our mission keeps the community in our focus, believing their stories are vastly more important than the narratives written by institutions. We want to raise awareness of decolonisation by building object-based narratives fuelled by the people these artefacts belong to. The Internet allows us to work together with our community in a space which is not physical and helps us fulfil our mission. Accessibility and preservation of precious cultural artefacts from all over the world are two of the many aspects of our work and two of the reasons that brought us into creating this space, this open access museum. Read more about us here in our Manifesto."
                }
              />
            </div>
            <div className="faq-group" id="wwu">
              <h4>WORK WITH US</h4>
              <Accordion
                title={
                  "I represent a museum and I would like to digitise my collection, how should I do it?"
                }
                description={
                  "You can read more about how we collaborate with museums here."
                }
              />
              <Accordion
                title={"I would like to support you. How can I do it?"}
                description={
                  "Here you can read more about what you can do to support our mission and here you can become a monthly Scan The World subscriber on Tribes."
                }
              />
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

export default Faq;
