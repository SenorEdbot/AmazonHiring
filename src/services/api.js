import axios from 'axios'

export default axios.create({
  baseURL: 'https://alex-and-eddie-server.herokuapp.com/api'
})
