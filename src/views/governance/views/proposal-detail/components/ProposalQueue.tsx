import { t } from '@lingui/macro'
import { LoadingButton } from 'components/button'
import { ethers } from 'ethers'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'
import {
  addTransactionAtom,
  rTokenGovernanceAtom,
  walletAtom,
} from 'state/atoms'
import { useTransactionState } from 'state/web3/hooks/useTransactions'
import { TRANSACTION_STATUS } from 'utils/constants'
import { v4 as uuid } from 'uuid'
import { proposalDetailAtom } from '../atom'

const ProposalQueue = () => {
  const account = useAtomValue(walletAtom)
  const governance = useAtomValue(rTokenGovernanceAtom)
  const addTransaction = useSetAtom(addTransactionAtom)
  const [txId, setTx] = useState('')
  const proposal = useAtomValue(proposalDetailAtom)
  const tx = useTransactionState(txId)

  useEffect(() => {
    if (
      tx?.status === TRANSACTION_STATUS.CONFIRMED ||
      tx?.status === TRANSACTION_STATUS.REJECTED
    ) {
      setTx('')
    }
  }, [tx?.status])

  const handleQueue = () => {
    if (account && governance.governor && proposal) {
      const id = uuid()
      setTx(id)
      addTransaction([
        {
          id,
          description: t`Queue proposal`,
          status: TRANSACTION_STATUS.PENDING,
          value: '0',
          call: {
            abi: 'governance',
            address: governance.governor,
            method: 'queue',
            args: [
              proposal.targets,
              new Array(proposal.targets.length).fill(0),
              proposal.calldatas,
              ethers.utils.keccak256(
                ethers.utils.toUtf8Bytes(proposal.description)
              ),
            ],
          },
        },
      ])
    }
  }

  return (
    <LoadingButton
      small
      loading={!!txId}
      ml="auto"
      disabled={!account}
      onClick={handleQueue}
      text={t`Queue proposal`}
    />
  )
}

export default ProposalQueue
