import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Spinner from "./Spinner";

const NewsPage = (props) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = () => {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          country: props.country,
          apiKey: props.apiKey,
          page: page,
          pageSize: props.pageSize,
          category: props.category,
        },
      })
      .then((response) => {
        setNews(response.data.articles);
        setTotalResults(response.data.totalResults);
        setLoading(false);
      });
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const handleNextClick = () => {
    setPage(page + 1);
    updateNews();
  };

  const handlePrevClick = () => {
    setPage(page - 1);
    updateNews();
  };

  return (
    <div className="container">
      <h2 className="ms-5">News - Top Headlines</h2>

      <div className="row">
        {loading ? (
          <Spinner />
        ) : (
          news.map((element) => {
            return (
              <div className="col-md-4 my-3">
                <NewsItem
                  key={element.url}
                  title={element.title}
                  desc={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })
        )}
      </div>
      <div className="d-flex justify-content-between my-3">
        <button
          onClick={handlePrevClick}
          className="btn btn-warning"
          disabled={page <= 1}
        >
          &larr; Previous
        </button>
        <p>
          <small>
            {page}/
            {Math.ceil(totalResults / props.pageSize)}
          </small>
        </p>
        <button
          onClick={handleNextClick}
          className="btn btn-warning"
          disabled={
            page ===
            Math.ceil(totalResults / props.pageSize)
          }
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
