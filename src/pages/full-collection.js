import { graphql } from "gatsby";
import React, { useRef, useState, useEffect } from "react";
import "../assets/scss/full-collection.scss";
import { Layout } from "../components/Layout";
import SearchIcon from "../images/search-icon-white.png";
import Check from "../images/full-collection/check.png";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";
import { ToolTipTitle } from "../components/TooltipTitle";
import { get } from "../utils/api";
import { SelectBox } from "../components/Selectbox";
import { Helmet } from "react-helmet";

const FullCollection = ({ location }) => {
  const searchRef = useRef();
  const searchRefXS = useRef();
  const [objectType, setObjectType] = useQueryParam("objectType", StringParam);
  const [page, setPage] = useState(1);
  const [openAccess, setAccess] = useQueryParam("openAccess");
  const [sort = "date", setSort] = useQueryParam("sort", StringParam);
  const [search, setSearch] = useQueryParam("query", StringParam);
  const [menuExpanded, setMenuExpanded] = useState(false);
  const loadRef = useRef();
  const [records, setRecords] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [state, setState] = useState({ loadMore: false });
  const [totalRecords, setTotalRecords] = useState(0);
  const [productsMargin, setProductsMargin] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const selectOptions = [
    {
      key: "artist",
      value: "Artist",
    },
    {
      key: "object",
      value: "Object name",
    },
    {
      key: "place",
      value: "Place",
    },
    // {
    //   key: "material",
    //   value: "Material",
    // },
    // {
    //   key: "tag",
    //   value: "Tag",
    // },
  ];
  async function getRecords({ reset = false } = {}) {
    setLoading(true);
    const data = await get({
      url: `/stw/objects/search?df=${getQueryType()}&query=${
        searchRef.current.value || ""
      }&sort=${sort}&page=${page || 1}&per_page=20${
        openAccess ? "&commercial_use=1&remix=1&exclusive=0" : ""
      }`,
    });
    setLoading(false);
    if (data && data.items) {
      setTotalRecords(data.totalCount);
      if (reset) {
        setRecords(data.items);
      } else {
        setRecords([...records, ...data.items]);
      }
    }
  }

  useEffect(
    function () {
      getRecords();
    },
    [page]
  );

  function getQueryType() {
    switch (objectType) {
      case "place":
        return "stw_place";
      case "artist":
        return "stw_artist";
      case "object":
        return "name";
      case "tag":
        return "stw_tag";
      case "material":
        return "stw_material";
      default:
        return "name";
    }
  }
  useEffect(function () {
    if (document.querySelector("body").clientWidth < 767) {
      setProductsMargin(
        document.querySelector(".full-collection-header").clientHeight + 20
      );
    } else {
      setProductsMargin(
        document.querySelector(".full-collection-header").clientHeight + 40
      );
    }
  }, []);

  useEffect(
    function () {
      setHasMore(records.length < totalRecords);
      setState({ loadMore: false });
    },
    [totalRecords, records]
  );
  useEffect(
    function () {
      setRecords([]);
      setPage(1);
      setState({ loadMore: false });
      setHasMore(false);
      getRecords({ reset: true });
    },
    [searchToggle, sort, openAccess]
  );

  function sortList(key) {
    if (sort === key) {
      // setSort({ ...sort, order: !sort.order });
    } else {
      setSort(key);
    }
  }

  function toggleOpenAccess() {
    setAccess(openAccess === "0" ? "1" : "0");
  }

  function toggleExpand() {
    setMenuExpanded(!menuExpanded);
  }

  function onChangeSearch(e) {
    setPage(() => {
      setSearch(searchRef.current.value);
      searchRefXS.current.value = searchRef.current.value;
      setSearchToggle(!searchToggle);
      return 1;
    });
  }
  function onChangeSearchXS(e) {
    setPage(() => {
      setSearch(searchRefXS.current.value);
      searchRef.current.value = searchRefXS.current.value;
      setSearchToggle(!searchToggle);
      return 1;
    });
  }
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setState({ ...state, loadMore: true });
    }
  };

  //Initialize the intersection observer API
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loadRef.current) {
      observer.observe(loadRef.current);
    }
  }, []);

  // Handle loading more articles
  useEffect(() => {
    if (state.loadMore) {
      if (!loading && hasMore) {
        setPage(page ? page + 1 : 1);
      }
      setState({ ...state, loadMore: false });
    }
  }, [state.loadMore]);

  function ExtraFilters() {
    return (
      <>
        <div className="sort">
          <div
            onClick={() => sortList("date")}
            className={
              "sort-item " +
              (sort === "date"
                ? " active " + (sort.order ? "asc" : "desc")
                : "")
            }
          >
            Recent
          </div>
          <div
            onClick={() => sortList("popularity")}
            className={
              "sort-item " +
              (sort === "popularity"
                ? " active " + (sort.order ? "asc" : "desc")
                : "")
            }
          >
            Popularity
          </div>
          {/* <div
            onClick={() => sortList("random")}
            className={
              "sort-item " +
              (sort.key === "random"
                ? " active " + (sort.order ? "asc" : "desc")
                : "")
            }
          >
            Random
          </div> */}
        </div>
        <div className="open-access">
          <div className="check" onClick={toggleOpenAccess}>
            <input
              type="checkbox"
              id="check"
              checked={+openAccess}
              onChange={() => toggleOpenAccess}
            />
            <img src={Check} alt="check" className={"active"} />
          </div>
          <label htmlFor="check">Open access</label>
        </div>
        <div className="select">
          <SelectBox
            onSelect={setObjectType}
            value={objectType}
            options={selectOptions}
          />
        </div>
      </>
    );
  }

  return (
    <Layout location={location} fixedFooter={true} hideSearch={true}>
      <Helmet title="Full Collection | Scan the World" />
      <div className="full-collection-section">
        <div className="full-collection-header">
          {" "}
          <h1>Full Collection</h1>
          <div className="filters-outer padding-sm">
            <div className="search-mobile search">
              <div>
                <input
                  type="text"
                  placeholder="Type to Search"
                  ref={searchRefXS}
                  className="search"
                  defaultValue={search}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      onChangeSearchXS();
                    }
                  }}
                />
                <button onClick={onChangeSearchXS}>
                  <img src={SearchIcon} alt="search icon" />
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              "filters-outer filters " + (menuExpanded ? "expanded" : "")
            }
          >
            <ExtraFilters />
            <div className="search">
              <div>
                <input
                  type="text"
                  placeholder="Type to Search"
                  ref={searchRef}
                  className="search"
                  defaultValue={search}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      onChangeSearch();
                    }
                  }}
                />
                <button onClick={onChangeSearch}>
                  <img src={SearchIcon} alt="search icon" />
                </button>
              </div>
            </div>
            <div className="expand-btn" onClick={toggleExpand} />
          </div>
        </div>

        <div className="products" style={{ marginTop: productsMargin }}>
          {records.map((i, k) => (
            <a
              href={i.threedObject.url}
              target="_blank"
              className="product"
              key={k}
            >
              <ToolTipTitle
                username={i.threedObject.designer.name}
                name={i.artist}
                title={i.title}
                icon={i.threedObject.designer.avatar_thumbnail_url}
              >
                <div>
                  <img
                    src={i.threedObject?.images[0].standard.url}
                    alt="product"
                  />
                  <h2>{i.title}</h2>
                </div>
              </ToolTipTitle>
            </a>
          ))}
        </div>
      </div>
      <div ref={loadRef} className="loading">
        {loading ? "Loading..." : hasMore ? "" : "No more records"}
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

export default FullCollection;
