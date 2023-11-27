import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'

export class NewsPage extends Component {

    constructor() {
        super()
        this.state = {
            news: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    componentDidMount() {
      axios.get(`https://newsapi.org/v2/top-headlines`,{
        params: {
          country: this.props.country,
          apiKey: this.props.apiKey,
          page: this.state.page,
          pageSize: this.props.pageSize
        }
      })
      .then((response) => {
        this.setState({
          news: response.data.articles,
          totalResults: response.data.totalResults
        })
      })
    }

    handleNextClick = () => {
      axios.get(`https://newsapi.org/v2/top-headlines`,{
        params: {
          country: this.props.country,
          apiKey: this.props.apiKey,
          page: this.state.page + 1,
          pageSize: this.props.pageSize
        }
      })
      .then((response) => {
        this.setState({
          news: response.data.articles,
          page: this.state.page + 1
        })
      })
    }
     
    handlePrevClick = () => {
      axios.get(`https://newsapi.org/v2/top-headlines`,{
        params: {
          country: this.props.country,
          apiKey: this.props.apiKey,
          page: this.state.page - 1,
          pageSize: this.props.pageSize
        }
      })
      .then((response) => {
        this.setState({
          news: response.data.articles,
          page: this.state.page - 1
        })
      })
    }

  render() {
    return (
      <div className='container'>
        <h2 className='ms-5'>News - Top Headlines</h2>
        
        <div className="row">

        {
          this.state.news.map((element)=>{
            return(
              <div className="col-md-4 my-3">
                <NewsItem key={element.url} title={element.title} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            )
          })
        }
        </div>
        <div className='d-flex justify-content-between my-3'>
          <button onClick={this.handlePrevClick} className='btn btn-warning' disabled={this.state.page <= 1}>&larr; Previous</button>
          <p><small>{this.state.page}/{Math.ceil(this.state.totalResults/this.props.pageSize)}</small></p>
          <button onClick={this.handleNextClick} className='btn btn-warning' disabled={this.state.page === Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

export default NewsPage
