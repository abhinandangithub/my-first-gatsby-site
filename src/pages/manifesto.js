import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import "../assets/scss/manifesto.scss";
import SupportImage from "../images/manifesto-support.png";
import ManifestoImage1 from "../images/manifesto-image-1.png";
import ManifestoImage2 from "../images/manifesto-image-2.png";
import ManifestoMetaverse from "../images/manifesto-metaverse.png";
import ManifestoReverse from "../images/manifesto-metareverse.png";
import ManifestoHumanity from "../images/manifesto-humanity.png";
import { Helmet } from "react-helmet";

const Manifesto = ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="Manifesto | Scan the World" />
      <div className="manifesto">
        <div className="manifesto-header">
          <div className="manifesto-group s-avatar">
            <Link to="/support" target={"_blank"}>
              <img
                src={SupportImage}
                alt="supportImage"
                className="support-image"
              />
            </Link>
            <div className="manifesto-group-item padding-l-0">
              <h1>MANIFESTO</h1>
              <p className="manifesto-header-p">
                <span>Scan the World</span> strives to play an important role in
                enabling a cultural <span>‘MetaReverse’</span>. The successful
                project, started in 2014, allows anyone to share personal
                meaningful cultural artefacts in the format of{" "}
                <span>free to download</span>, <span>3D printable</span> scans.
                By doing so, <span>Scan the World</span> brings the cultural
                artefact as the <span>protagonist of its history</span> and in
                turn facilitates more direct <span>connections</span> between
                the global community's shared cultural heritage. . Scan the
                World is positioning itself as an alternative to{" "}
                <span>Metaverses</span>.{" "}
              </p>
              <p className="manifesto-right-gray">
                "<span>Scan the World</span> enables the emergence of a
                conscious space that protects and shares stories of our shared
                heritage"
              </p>
            </div>

            <div className="manifesto-group-item align-self-end padding-l-20">
              <div className="header-images">
                <p>
                  For the advent of a <br />
                  Cultural <span>MetaReverse</span>
                </p>
                <div className="d-flex gap-1">
                  <div>
                    <img src={ManifestoImage1} alt="image-1" />
                  </div>
                  <div>
                    <img src={ManifestoImage2} alt="image-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="manifesto-item">
          <div className="manifesto-group">
            <div className="manifesto-group-item v-center">
              <img
                src={ManifestoReverse}
                alt="manifesto metaverse"
                className="pull-right"
              />
            </div>
            <div className="manifesto-group-item content padding-l-20">
              <h5 className="manifesto-title">
                <p>MetaReverse</p>
                <p>meteəevɜ:s</p>
              </h5>
              <p className="manifesto-about">
                A <span>MetaReverse</span> is a liberating universe built on
                actual <span>connections</span> between people. It strives to
                fight and Re-verse the slow death of human consciousness and the
                unconsciousness brought by <span>Metaverses</span>. It aims to
                facilitate a Re-connection between people, their history and
                spirituality. A <span>MetaReverse</span> supports the Re-turn of
                individuality and Mutual Aid.
              </p>
              <p className="manifesto-about">
                <span>Scan the World</span> supports this emergence of a
                cultural <span>MetaReverse</span> by bringing meaningful digital
                cultural artefacts back into the physical world via 3D printing,
                yet to be shared directly only by related and connected people,
                in a decentralised manner.
              </p>
            </div>
          </div>
        </div>

        <div className="manifesto-item margin-top-0">
          <div className="manifesto-group">
            <div className="manifesto-group-item content order-sm-1">
              <h5 className="manifesto-title text-end">
                <p>Metaverse</p>
                <p>meteɪvɜ:s</p>
              </h5>
              <p className="manifesto-about text-end">
                A <span>Metaverse</span> is a digital trap that wishes to mimic
                actual life in a digital format.It takes inspiration from how
                processed food has attempted to replicate naturally grown food
                in the 20th century. As highlighted by Jean Baudrillard, the{" "}
                <span>Metaverse</span>, or hyperreality, is a heightened level
                of reality that has been hijacked by greed,
              </p>
              <p className="manifesto-about text-end">
                "We live in a world where there is more and more information,
                and less and less meaning" (Simulacra and Simulation 1994).
              </p>
              <p className="manifesto-about text-end">
                A <span>Metaverse</span> facilitates de-connection,
                de-humanisation and de-tention with absolute control of personal
                data and personal self. In a nutshell, it strives to annihilate
                individuality.
              </p>
            </div>
            <div className="manifesto-group-item v-center order-sm-0 padding-l-20">
              <img src={ManifestoMetaverse} alt="manifesto metaverse" />
            </div>
          </div>
        </div>

        <div className="manifesto-item">
          <div className="manifesto-group">
            <div className="manifesto-group-item v-center">
              <img
                src={ManifestoHumanity}
                alt="manifesto humanity"
                className="pull-right"
              />
            </div>
            <div className="manifesto-group-item content padding-l-20">
              <h5 className="manifesto-title">
                Why is the emergence of <span>Metaverses</span> a risk for
                humanity?
              </h5>
              <p className="manifesto-about">
                Physical cultural artefacts have shaped our conscience for a
                millennia. While many artefacts have been crafted with love,
                tradition and identity to aid in the creation and common
                connection of a community, some have been made to frame
                Humanity’s perspective on what is considered beautiful or
                meaningful. The latter have been instrumentalised by dominant
                players to frame Humanity with a physical representation of the
                good, the bad and the ugly. They have defined our history with
                physical representations of heroic soldiers, scientific
                geniuses, social activists and great artists in accordance with
                the winners of wars. In brief, sculptures have become the
                physical representation of the dominant narrative. Placed in
                museums, they are losing their contexts and the fingers used to
                produce them are forgotten.
              </p>
            </div>
          </div>
        </div>
        <div className="manifesto-item text-center only-content">
          <div className="manifesto-group">
            <div className="manifesto-group-item w-100">
              <h5 className="manifesto-title">
                Digital 3D assets will shape our conscience in{" "}
                <span>Metaverses</span>
              </h5>
              <p className="manifesto-about">
                Tech behemoths, the new meta dominant of our World, have turned
                their focus on owning the digital 3D cultural artefacts that
                will populate <span>Metaverses</span>. In doing so, they are
                replicating what previous dominants (oil and fashion magnates,
                industrialists, kings and queens,...) have done with buying art
                and historical collections to assert their narrative on the
                people. The risk is that humanity may lose sight of their
                cultural identities, diluted in Metaverses and controlled by
                dominant players.
              </p>
            </div>
          </div>
        </div>
        <div className="manifesto-item text-center only-content">
          <div className="manifesto-group">
            <div className="manifesto-group-item w-100">
              <h5 className="manifesto-title">
                <span>Scan the World</span> enables the emergence of a{" "}
                <span>MetaReverse</span> for cultural artefacts, a liberating
                universe.
              </h5>
              <p className="manifesto-about">
                What is at stake now is for the people to regain control of the
                narrative (historical, philosophical, scientific and spiritual)
                in order to reconnect with their consciousness and
                subconsciousness. <span>Scan the World</span> strives to
                facilitate this liberation by enabling an Ecosystem where
                everyone can freely share directly meaningful digital 3D scanned
                cultural artefacts for physical representation (3D printing).
              </p>
              <p className="manifesto-about">
                <span>Scan the World</span> was built as a means to create
                fairness in digital culture and stabilise a power imbalance
                between the people and the institution. It provides a safe space
                for artefacts, stories and culture to be shared and discovered,
                no matter where in the world it comes from.
              </p>
              <p className="manifesto-about">
                <span>Scan the World</span> arims to enable the re-population of{" "}
                <span>MetaReverses</span> with free digital artefacts
                contributed/scanned by the people, loved and curated by the
                people, meaningful for the people. Being{" "}
                <span>3D printable</span>, these digital assets can be turned
                into physical objects to be shared and enjoyed in real life
                between genuine communities, reversing the digital trapping led
                by tech behemoths.
              </p>
            </div>
          </div>
        </div>

        <div className="manifesto-item text-center support-group">
          <div className="manifesto-group">
            <div className="manifesto-group-item w-100">
              <Link to="/support" target={"_blank"}>
                <img
                  src={SupportImage}
                  alt="support image"
                  className="support-footer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
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

export default Manifesto;
