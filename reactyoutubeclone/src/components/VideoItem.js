import React from 'react'

export const VideoItem = ({ video }) => {
  return (
    <div class="ui card">
      <div class="image">
        <img src={video.snippet.thumbnails.medium.url} />
      </div>
      <div class="content">
        <a class="header">{video.snippet.title}</a>
        <div class="meta">
          <span class="date">{video.snippet.publishedAt}</span>
        </div>
        <div class="description">{video.snippet.description}</div>
      </div>
    </div>
  )
}
