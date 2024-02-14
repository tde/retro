import ethers from "ethers"
import axios from "axios"

const priceApi = 'https://min-api.cryptocompare.com/data/price'
export const networks= {
    'ETH': {
        rpc: 'https://eth.llamarpc.com',
        provider: new ethers.providers.JsonRpcProvider(this.rpc),
        'nativePrice': await axios.get(priceApi+'?fsym=ETH&tsyms=USD').then(r => { return r.data.USD}),
        'USDT': {
            address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            decimals: 6
        },
        'USDC': {
            address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            decimals: 18
        },
        'DAI': {
            address: '0x6b175474e89094c44da98b954eedeac495271d0f',
            decimals: 18
        }
    }
}