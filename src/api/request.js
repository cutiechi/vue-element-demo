import { baseURL } from '../config'
import axios from 'axios'

const request = axios.create({
  baseURL,
  timeout: 5000
})

request.interceptors.response.use(({ data }) => {
  const { code } = data
  if (code === 20000) {
    return data
  } else {
    const { message } = data
    return Promise.reject(message)
  }
}, error => {
  return Promise.reject(error)
})

export default request
