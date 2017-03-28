import axios from 'axios'

function Api () {
  return (axios.get('https://api.bitfinex.com/v2/tickers?symbols=tBTCUSD', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log('Esito della chiamata ajax', response.status + ' = ok', response.data[0])
    document.getElementById('20').innerHTML = response.data[0]
  }
  )
  )
}

export default Api
