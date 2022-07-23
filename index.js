require('dotenv').config()
const axios = require('axios')

const API = process.env.API_V2
console.log(API)

query =
`{
  pair(id: "${process.env.PAIR}") 
  {
    id
    liquidityProviderCount
    reserve0
    reserve1
    reserveETH
    reserveUSD
    token0Price
    token1Price
    totalSupply
    trackedReserveETH
    txCount
    volumeToken0
    volumeToken1
  
    token0 {
      decimals
      derivedETH
      id
      name
      symbol
      totalLiquidity
      totalSupply
      tradeVolume
      tradeVolumeUSD
      txCount
      untrackedVolumeUSD
    }
    token1 {
      decimals
      derivedETH
      id
      name
      symbol
      totalLiquidity
      totalSupply
      tradeVolume
      tradeVolumeUSD
      txCount
    }
  }
}`

axios.post(API, { query: query })
  .then ((result) => {
    console.log(result.data.data)
   console.log(result.data.data.pair.token0.symbol)
  })