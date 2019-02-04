import axios from 'axios'
import modal from './modal'
import loading from './loading'

axios.defaults.timeout = 60000
axios.defaults.baseURL = process.env.NODE_ENV === 'development'
  ? 'http://0.0.0.0:1995'
  : 'http://zhuangtianyu.com:1995'

// 错误 => loading.hide() && errorTip
const error = error => {
  loading.hide()
  modal({ message: error })
}

// request
axios.interceptors.request.use(
  config => {
    loading.show()
    return config
  },
  error
)

// response
axios.interceptors.response.use(
  response => {
    loading.hide()
    return response.data
  },
  error
)

export default axios
