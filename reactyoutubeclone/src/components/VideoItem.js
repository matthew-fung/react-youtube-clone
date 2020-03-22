import React from 'react'

export const VideoItem = ({ video }) => {
  return (
    <>
      <h1>{video.snippet.title}</h1>
      <img src={video.snippet.thumbnails.default.url} />
    </>
  )
}
