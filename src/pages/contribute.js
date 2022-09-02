import { Link, graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import threeDModelImage from "../images/contribute/3d-model.png";
import threeDPrintingImage from "../images/contribute/3d-printing.png";
import remixImage from "../images/contribute/remix.png";
import PhotogrammetryImage from "../images/contribute/photogrammetry.png";
import renderImage from "../images/contribute/render.png";
import storyImage from "../images/contribute/story.png";
import joinTheTribeImage from "../images/join-our-tribe.png";
import beholderImage from "../images/contribute/beholder-img.png";
import trnioImage from "../images/contribute/trnio-img.png";
// import TutorialImage from "../images/contribute/tutorial.png";
import "../assets/scss/contribute.scss";
import { Helmet } from "react-helmet";

const Contribute = ({ location, data }) => {
  return (
    <>
      <Layout location={location}>
        <Helmet title="Contribute | Scan the World" />
        <div className="contribute-section">
          <h1>Contribute</h1>
          <div className="contribute-product">
            <div className="image-wrap">
              <div className="image">
                <img src={PhotogrammetryImage} alt="Photogrammetry" />
                <div className="overlay" />
                <div className="faq-name">Photogrammetry</div>
                <div className="popup">
                  <p>
                    Upload a photogrammetry data-set directly to Scan The World
                    using Beholder Vision on your desktop or TRNIO+ on your
                    smartphone
                  </p>
                  <div className="contribute-block">
                    <a href="https://beholder.vision/" target="_blank">
                      <div className="contribute-radius">
                        {" "}
                        <img src={beholderImage} alt="Beholder" />
                      </div>
                      How to upload with Beholder Vision
                    </a>
                    <a
                      href="https://www.myminifactory.com/stories/trnio-plus-integrates-scan-the-world-scan-sculptures-with-your-smartphone"
                      target="_blank"
                    >
                      <div className="contribute-radius">
                        <img src={trnioImage} alt="Trnio" />
                      </div>
                      How to upload with TRNIO+
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="image">
                <img src={threeDModelImage} alt="3d model" />
                <div className="overlay" />
                <div className="faq-name">3D Model</div>
                <div className="popup">
                  <p>
                    Already have a 3D scan to upload? We accept STL and OBJ,
                    MTL, PNG/JPEG files. Note - If the scan is not printable, it
                    might take some time for it to be approved!
                  </p>
                  <div className="contribute-block">
                    <a
                      href="https://www.myminifactory.com/upload/object"
                      target="_blank"
                    >
                      3D Model
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="image">
                <img src={remixImage} alt="Remix image" />
                <div className="overlay" />
                <div className="faq-name">Remix</div>
                <div className="popup">
                  <p>
                    Want to show off your remixes from the collection? Upload
                    your models here!
                  </p>
                  <div className="contribute-block">
                    <Link to="#" className="coming-soon-btn">
                      Coming Soon
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="image">
                <img src={storyImage} alt="Story image" />
                <div className="overlay" />
                <div className="faq-name">Story</div>
                <div className="popup">
                  <p>
                    Do you have a story you’d like to share with the community?
                    Use our story building tool and help contextualise the
                    collection!{" "}
                  </p>
                  <div className="contribute-block">
                    <a
                      href="https://www.myminifactory.com/story/new"
                      target="_blank"
                    >
                      Story
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="image">
                <img src={renderImage} alt="Render image" />
                <div className="overlay" />
                <div className="faq-name">Render</div>
                <div className="popup">
                  <p className="coming-soon">
                    Coming soon. You can send us your renders via email in the
                    meantime.
                  </p>
                  <div className="contribute-block">
                    <a href="mailto:stw@myminifactory.com">Send via email</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="image">
                <img src={threeDPrintingImage} alt="3D Print image" />
                <div className="overlay" />
                <div className="faq-name">3D print</div>

                <div className="popup">
                  <p>Share pictures of your 3D prints here</p>
                  <div className="contribute-block">
                    <a
                      href="https://www.myminifactory.com/upload/print"
                      target="_blank"
                    >
                      Upload prints
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contribute-join">
            <div className="contribute-block">
              <a href={data.site.siteMetadata.tribe_url} target="_blank">
                <img src={joinTheTribeImage} alt="join our tribe" />
              </a>
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
    site {
      siteMetadata {
        tribe_url
      }
    }
  }
`;

export default Contribute;
