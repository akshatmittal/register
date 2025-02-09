import { atom } from 'jotai'
import { accountRTokensAtom } from 'state/atoms'
import { DEFAULT_TOKENS } from 'utils/addresses'
import { CHAIN_ID } from 'utils/chains'
import rtokens from 'utils/rtokens'

export interface TokenDisplay {
  address: string
  symbol: string
  logo: string
}

export const DEFAULT_LOGO = '/svgs/default.svg'

const availableTokensAtom = atom((get) => {
  const defaultTokens = DEFAULT_TOKENS[CHAIN_ID]
  const owned = get(accountRTokensAtom)
  const tokenList: {
    [x: string]: TokenDisplay
  } = {}

  for (const tokenAddress of defaultTokens) {
    const token = rtokens[tokenAddress]

    if (token) {
      tokenList[tokenAddress] = {
        address: tokenAddress,
        symbol: token.symbol,
        logo: token.logo
          ? require(`@lc-labs/rtokens/images/${token.logo}`)
          : DEFAULT_LOGO,
      }
    }
  }

  for (const token of owned) {
    if (!tokenList[token.address]) {
      tokenList[token.address] = {
        address: token.address,
        symbol: token.symbol,
        logo: DEFAULT_LOGO,
      }
    }
  }

  return tokenList
})

export default availableTokensAtom
