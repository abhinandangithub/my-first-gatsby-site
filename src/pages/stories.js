import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import React from "react";
import "../assets/scss/stories.scss";
import useFetch from "../utils/useFetch";
import { Pagination } from "../components/Pagination/pagination";
import { useState } from "react";
import { useQueryParam, NumberParam } from "use-query-params";
import { ToolTipTitle } from "../components/TooltipTitle";
import { Helmet } from "react-helmet";

const Stories = ({ location }) => {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetch({
    url: "/search/post?cat=8&sort=date&page=" + page,
  });

  return (
    <>
      <Layout location={location}>
        <Helmet title="Stories/Tutorials | Scan the World" />
        <div className="stories-section">
          <h1>Stories / Tutorials</h1>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            data &&
            data.items &&
            data.items.length > 0 && (
              <>
                <div className="story-card">
                  {data.items.map((item, i) => (
                    <a
                      href={"https://www.myminifactory.com/stories/" + item.url}
                      target={"_blank"}
                      className="image-wrap"
                      key={i}
                    >
                      <div className="image">
                        <img src={item.obj_img} alt="Photogrammetry" />
                        <div className="story-details">
                          <ToolTipTitle
                            username={item.user_name}
                            name={item.user_username}
                            title={item.name}
                            icon={item.user_img}
                            onlyDesktop={true}
                          >
                            <h2 className="item-name">{item.name}</h2>
                          </ToolTipTitle>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <Pagination
                  count={data.total_count}
                  pageNumber={page}
                  onPageChange={(pageNumber) => setPage(pageNumber)}
                />
              </>
            )
          )}
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

export default Stories;
