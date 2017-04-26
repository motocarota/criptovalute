// Inject fetch polyfill if fetch is unsuported
import axios from 'axios'

function get (payload, timeFrame = '1D') {
  console.log(payload)
  return axios.get(
    `https://api.bitfinex.com/v2/candles/trade:${timeFrame}:${payload.symbol}/hist`
  )
}

export default {
  get
}
