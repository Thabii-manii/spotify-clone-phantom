


import spotify from './spotify.json'

import { clusterApiUrl, PublicKey } from '@solana/web3.js'

export const SOLANA_HOST = 'https://muddy-shy-dawn.solana-devnet.quiknode.pro/5b638e723dd3df716748cb5432458a2e21e53e05/'

// export const SOLANA_HOST = clusterApiUrl('devnet')

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  '78QwFTAWwwhAwDf7f1URnS5jJgATLV6QF85XtyW4kLWE',
)

export const STABLE_POOL_IDL = spotify