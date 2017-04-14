// Inject fetch polyfill if fetch is unsuported
import axios from 'axios'

const symbols = [ 'tBTCUSD', 'tETCUSD', 'tLTCUSD' ]

function get( { symbol = 'tBTCUSD', timeFrame = '1D' } ) {
  return (axios.get(`https://api.bitfinex.com/v2/candles/trade:${timeFrame}:${symbol}/hist`))
}

function getAll () {
  return symbols.map((s) => get(s))
}

// function Api() {
//   return (axios.get(`https://api.bitfinex.com/v2/tickers?symbols=tBTCUSD,tLTCUSD,fUSD`, {
//     params: {
//       ID: 0
//     }
//   })
//   .then(res => res.data)
//     // .then(function (response) {
//     //   console.log(response.data[0])
//     //   console.log('Valuta ', (response.data[0])[0].slice(1, 7))
//     //   console.log('Last Price ', (response.data[0])[7])
//     //})
//   )
// }

export default {
  get,
  getAll
}
