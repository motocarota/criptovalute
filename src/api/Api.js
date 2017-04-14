// Inject fetch polyfill if fetch is unsuported
import axios from 'axios'

const symbols = [ 'tBTCUSD', 'tETCUSD', 'tLTCUSD' ]

function get( { symbol = 'tBTCUSD', timeFrame = '1D' } ) {
  return (axios.get(`https://api.bitfinex.com/v2/candles/trade:${timeFrame}:${symbol}/hist`))
}

function getAll () {
  return symbols.map((s) => get(s))
}

export default {
  get,
  getAll
}
