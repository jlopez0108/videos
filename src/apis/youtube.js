import axios from 'axios'

const KEY = 'AIzaSyAc69GcJCmQ6eMb1iTx07aAnlp6LGdp_pA'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
})
