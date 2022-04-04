import { useWeb3React } from '@web3-react/core'
import { atom } from 'jotai'
import { useAtomValue, useUpdateAtom } from 'jotai/utils'
import { useCallback, useEffect, useState } from 'react'
import useDebounce from './useDebounce'
import useIsWindowVisible from './useIsWindowVisible'

function useBlock() {
  const { chainId, provider } = useWeb3React()
  const windowVisible = useIsWindowVisible()
  const [state, setState] = useState<{ chainId?: number; block?: number }>({
    chainId,
  })

  const onBlock = useCallback(
    (block: number) => {
      setState((prevState) => {
        if (prevState.chainId === chainId) {
          if (typeof prevState.block !== 'number') return { chainId, block }
          return { chainId, block: Math.max(block, prevState.block) }
        }
        return prevState
      })
    },
    [chainId]
  )

  useEffect(() => {
    if (provider && chainId && windowVisible) {
      // If chainId hasn't changed, don't clear the block. This prevents re-fetching still valid data.
      setState((prevState) =>
        prevState.chainId === chainId ? prevState : { chainId }
      )

      provider
        .getBlockNumber()
        .then(onBlock)
        .catch((error) => {
          console.error(
            `Failed to get block number for chainId ${chainId}`,
            error
          )
        })

      provider.on('block', onBlock)
      return () => {
        provider.removeListener('block', onBlock)
      }
    }
    return undefined
  }, [chainId, provider, onBlock, windowVisible])

  const debouncedBlock = useDebounce(state.block, 100)
  return state.block ? debouncedBlock : undefined
}

const blockAtom = atom<number | undefined>(undefined)

export function BlockUpdater() {
  const setBlock = useUpdateAtom(blockAtom)
  const block = useBlock()
  useEffect(() => {
    setBlock(block)
  }, [block, setBlock])
  return null
}

/** Requires that BlockUpdater be installed in the DOM tree. */
export default function useBlockNumber(): number | undefined {
  const { chainId } = useWeb3React()
  const block = useAtomValue(blockAtom)
  return chainId ? block : undefined
}

export function useFastForwardBlockNumber(): (block: number) => void {
  return useUpdateAtom(blockAtom)
}