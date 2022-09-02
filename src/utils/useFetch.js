import { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

const useFetch = ({ url }) => {
  const siteMeta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          api_url
        }
      }
    }
  `);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(siteMeta.site.siteMetadata.api_url + url)
      .then((data) => data.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((error) => setError(error));
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
