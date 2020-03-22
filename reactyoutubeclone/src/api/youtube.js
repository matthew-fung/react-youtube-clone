import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_BASE_URL,
})
