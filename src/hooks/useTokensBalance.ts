import { StringMap } from 'types'
import { useMemo } from 'react'
import {
  useContractCalls,
  useEthers,
  ERC20Interface,
  useDebounce,
  useBlockNumber,
} from '@usedapp/core'
import { BigNumber, BigNumberish, ethers } from 'ethers'

/**
 * Returns a boolean if the given tokens has a certain amount of allowance to spend
 *
 * @param tokens
 * @param spender
 * @param amount
 * @returns
 */
const useTokensBalance = (tokens: [string, number][]): StringMap => {
  const { account, chainId } = useEthers()
  const blockNumber = useDebounce(useBlockNumber(), 1000)

  const calls = useMemo(
    () =>
      tokens.map(([address]) => ({
        abi: ERC20Interface,
        address,
        method: 'balanceOf',
        args: [account],
      })),
    [tokens.toString(), account, chainId, blockNumber]
  )

  const balances = <any[]>useContractCalls(calls) ?? []

  return balances.reduce((acc, current, index) => {
    if (current && current[0]) {
      const [address, decimals] = tokens[index]
      acc[address] = parseFloat(ethers.utils.formatUnits(current[0], decimals))
    }

    return acc
  }, <StringMap>{})
}

export default useTokensBalance