import axios from 'axios'

function Api () {
  return (axios.get('https://api.bitfinex.com/v2/tickers?symbols=tBTCUSD', {
    params: {
      ID: 0
    }
  })
  .then(function (response) {
    console.log('Valuta ', response.data[0])
    document.getElementById('20').innerHTML = (response.data[0])[0]
  }
  )
  )
}

export default Api
