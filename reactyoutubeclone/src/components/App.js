import React, { Component } from 'react'
import youtube from '../api/youtube'
import { SearchBar } from './SearchBar'
import { VideoList } from './VideoList'

export default class App extends Component {
  state = { videos: [] }

  onSearchSubmit = async searchTerm => {
    try {
      const response = await youtube.get('/search', {
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 5,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q: searchTerm,
        },
      })
      this.setState({ videos: response.data.items })
    } catch (error) {
      console.log('error:', JSON.stringify(error))
    }
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}
