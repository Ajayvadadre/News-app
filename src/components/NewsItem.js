import React, { Component } from "react";

const NewsItem =(props)=> {
    let { title, desc, imgUrl, newsUrl } = props;
    // console.log(props)

    return (
      <div className="card">
        <img src={imgUrl ? imgUrl : "https://www.pioj.gov.jm/wp-content/uploads/2018/04/news-default.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc}
          </p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-small btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }

export default NewsItem;
