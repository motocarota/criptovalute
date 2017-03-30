import axios from 'axios'

function Api() {
  return (axios.get(`https://api.bitfinex.com/v2/tickers?symbols=tBTCUSD,tLTCUSD,fUSD`, {
    params: {
      ID: 0
    }
  })
  .then(res => res.data)
    // .then(function (response) {
    //   console.log(response.data[0])
    //   console.log('Valuta ', (response.data[0])[0].slice(1, 7))
    //   console.log('Last Price ', (response.data[0])[7])
    //})
  )
}

export default Api
