import React from 'react'
import './VideoItem.css'

export const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="ui card video-item">
      <div className="image">
        <img src={video.snippet.thumbnails.medium.url} />
      </div>
      <div className="content">
        <a className="header">{video.snippet.title}</a>
        <div className="meta">
          <span className="date">{video.snippet.publishedAt}</span>
        </div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  )
}
