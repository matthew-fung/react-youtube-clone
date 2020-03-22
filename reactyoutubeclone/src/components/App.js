import React, { Component } from 'react'
import youtube from '../api/youtube'
import { SearchBar } from './SearchBar'
import { VideoList } from './VideoList'
import { VideoDetail } from './VideoDetail'

export default class App extends Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onSearchSubmit('coronavirus')
  }

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
      this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    } catch (error) {
      console.log('error:', JSON.stringify(error))
    }
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className="ui grid ">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
