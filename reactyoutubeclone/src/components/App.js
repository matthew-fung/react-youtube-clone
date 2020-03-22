import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'

export default class App extends Component {
  onSearchSubmit = async searchTerm => {
    try {
      const result = await youtube.get('/search', {
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 5,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q: searchTerm,
        },
      })
      console.log(result)
    } catch (error) {
      console.log('error:', error)
      console.log(JSON.stringify(error))
    }
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}
