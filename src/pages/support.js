import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import "../assets/scss/support.scss";
import DonateImage from "../images/support/donate-crypto.png";
import JoinImage from "../images/support/join-tribe.png";
import OneOffImage from "../images/support/one-off-donation.png";
import DesktopImage from "../images/support/desktop-icon.png";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { DonatePopup } from "../components/DonatePopup";
const isBrowser = typeof window !== "undefined";
let eth;
if (isBrowser) {
  eth = window.ethereum;
}

const Support = ({ location, data }) => {
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const [donateSuccess, setDonateSuccess] = useState(false);
  useEffect(
    function () {
      if (!showDonatePopup) {
        setTimeout(function () {
          setDonateSuccess(false);
        }, 100);
      }
    },
    [showDonatePopup]
  );
  async function donateCrypto() {
    try {
      if (typeof eth === "undefined") {
        return toggleDonatePopup();
      }

      const accounts = await eth.request({ method: "eth_requestAccounts" });
      const account = accounts[0];

      if (!accounts.length) {
        return toggleDonatePopup();
      }
      const transactionHash = await eth.request({
        method: "eth_sendTransaction",
        params: [
          {
            to: data.site.siteMetadata.donateAddress,
            from: account,
            value: data.site.siteMetadata.donateAmount,
          },
        ],
      });
      if (transactionHash) {
        setDonateSuccess(true);
        toggleDonatePopup();
      }
    } catch (e) {
      if (e.message === "User rejected the request.") {
        // return toggleDonatePopup();
      }
      // toggleDonatePopup();
    }
  }

  function toggleDonatePopup() {
    setShowDonatePopup(!showDonatePopup);
  }

  return (
    <>
      <Layout location={location}>
        <Helmet title="Support us | Scan the World" />
        <DonatePopup
          onToggle={toggleDonatePopup}
          show={showDonatePopup}
          success={donateSuccess}
        />
        <div className="support-section">
          <h1>Support</h1>
          <div className="support-options">
            <div>
              <a href={data.site.siteMetadata.paypal_url} target="_blank">
                <img src={OneOffImage} alt="one off donation" />
              </a>
            </div>
            <div>
              <Link to="#" onClick={donateCrypto} className="disabled">
                <img src={DonateImage} alt="Donate Crypto" />
              </Link>
              {/* <div className="desktop-only">
                <img src={DesktopImage} alt="Desktop Image" /> Desktop Only
              </div> */}
            </div>
            <div>
              <a href={data.site.siteMetadata.tribe_url} target="_blank">
                <img src={JoinImage} alt="Join Tribe" />
              </a>
            </div>
          </div>
          <div className="support-text">
            <span>
              Your support is vital to Scan the World’s growth and maintenance,
              ensuring that we can continue to share the collection with the
              world.
            </span>
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
        donateAddress
        donateAmount
        tribe_url
        paypal_url
      }
    }
  }
`;

export default Support;
