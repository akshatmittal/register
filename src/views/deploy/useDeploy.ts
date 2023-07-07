import { t } from '@lingui/macro'
import useDebounce from 'hooks/useDebounce'
import useTransactionCost from 'hooks/useTransactionCost'
import { useAtomValue, useSetAtom } from 'jotai'
import { atomWithReset } from 'jotai/utils'
import { useCallback, useMemo } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { addTransactionAtom, chainIdAtom } from 'state/atoms'
import { useTransactionState } from 'state/chain/hooks/useTransactions'
import { getTransactionWithGasLimit } from 'utils'
import { FACADE_WRITE_ADDRESS } from 'utils/addresses'
import { TRANSACTION_STATUS } from 'utils/constants'
import { v4 as uuid } from 'uuid'
import {
  backupCollateralAtom,
  basketAtom,
  isBasketValidAtom,
  isRevenueValidAtom,
  revenueSplitAtom,
} from '../../components/rtoken-setup/atoms'
import { isValidExternalMapAtom } from './../../components/rtoken-setup/atoms'
import { getDeployParameters } from './utils'

export const deployIdAtom = atomWithReset('')

export const useDeployTx = () => {
  const {
    getValues,
    formState: { isValid },
  } = useFormContext()
  const isBasketValid = useAtomValue(isBasketValidAtom)
  const isRevenueSplitValid = useAtomValue(isRevenueValidAtom)
  const isValidExternalMap = useAtomValue(isValidExternalMapAtom)
  const primaryBasket = useAtomValue(basketAtom)
  const backupBasket = useAtomValue(backupCollateralAtom)
  const revenueSplit = useAtomValue(revenueSplitAtom)
  const formFields = useWatch()
  const chainId = useAtomValue(chainIdAtom)

  const isDeployValid =
    isBasketValid && isRevenueSplitValid && isValidExternalMap

  return useMemo(() => {
    if (!isDeployValid) {
      return null
    }

    const params = getDeployParameters(
      getValues(),
      primaryBasket,
      backupBasket,
      revenueSplit
    )

    if (!params) {
      return null
    }

    return {
      id: '', // Assign when running tx
      description: t`Deploy RToken`,
      status: TRANSACTION_STATUS.PENDING,
      value: '0',
      call: {
        abi: 'facadeWrite',
        address: FACADE_WRITE_ADDRESS[chainId],
        method: 'deployRToken',
        args: params as any,
      },
    }
  }, [
    primaryBasket,
    isDeployValid,
    backupBasket,
    revenueSplit,
    chainId,
    JSON.stringify(formFields),
  ])
}

export const useDeployTxState = () => {
  const txId = useAtomValue(deployIdAtom)
  const tx = useTransactionState(txId)

  return tx
}

const useDeploy = () => {
  const tx = useDeployTx()
  const debouncedTx = useDebounce(tx, 100)
  const setTxId = useSetAtom(deployIdAtom)
  const addTransaction = useSetAtom(addTransactionAtom)
  const [fee, gasError, gasLimit] = useTransactionCost(
    debouncedTx ? [debouncedTx] : [] // use debounceTx to avoid too many requests
  )
  const isValid = !!tx

  const handleDeploy = useCallback(() => {
    if (tx) {
      const id = uuid()
      addTransaction([{ ...getTransactionWithGasLimit(tx, gasLimit), id }])
      setTxId(id)
    }
  }, [tx, gasLimit, addTransaction])

  return useMemo(
    () => ({
      fee,
      error: gasError,
      isValid,
      deploy: handleDeploy,
    }),
    [fee, gasError, handleDeploy, isValid]
  )
}

export default useDeploy
