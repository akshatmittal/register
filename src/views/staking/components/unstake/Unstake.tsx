import styled from '@emotion/styled'
import { parseEther } from '@ethersproject/units'
import { Box, Card, Text } from '@theme-ui/components'
import { StRSRInterface } from 'abis'
import { Button, NumericalInput } from 'components'
import { useAtomValue, useSetAtom } from 'jotai'
import { useState } from 'react'
import { addTransactionAtom, balancesAtom } from 'state/atoms'
import { TX_STATUS } from 'state/web3/components/TransactionManager'
import { ReserveToken } from 'types'
import { formatCurrency } from 'utils'

const InputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Unstake = ({ data }: { data: ReserveToken }) => {
  const [amount, setAmount] = useState('')
  // TODO: Balances
  const balance =
    useAtomValue(balancesAtom)[data.insurance?.token.address ?? ''] || 0
  const addTransaction = useSetAtom(addTransactionAtom)

  const handleUnstake = () => {
    addTransaction([
      {
        autoCall: true,
        description: `Unstake ${amount}`,
        status: TX_STATUS.PENDING,
        value: amount,
        call: {
          abi: StRSRInterface,
          address: data.insurance?.token?.address as string,
          method: 'unstake',
          args: [parseEther(amount)],
        },
      },
    ])

    setAmount('')
  }

  const isValid = () => {
    const value = Number(amount)
    return value > 0 && value <= balance
  }

  return (
    <Card>
      <InputContainer m={3}>
        <Text as="label" variant="contentTitle" mb={2}>
          UnStake
        </Text>
        <NumericalInput
          id="unstake"
          placeholder="UnStake amount"
          value={amount}
          onChange={setAmount}
        />
        <Text
          onClick={() => setAmount(balance.toString())}
          as="a"
          variant="a"
          sx={{ marginLeft: 'auto', marginTop: 1 }}
        >
          Max: {formatCurrency(balance)}
        </Text>
        <Button mt={2} disabled={!isValid()} onClick={handleUnstake}>
          Unstake
        </Button>
      </InputContainer>
    </Card>
  )
}

export default Unstake
