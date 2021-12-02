import { Box } from '@theme-ui/components'
import { SectionCard } from 'components'
import { Table } from 'components/table'
import { useTransactionsState } from 'state/context/TransactionManager'

const columns = [
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Value',
    accessor: 'value',
  },
  {
    Header: 'TX Hash',
    accessor: 'hash',
  },
]

const TransactionHistory = () => {
  const [state] = useTransactionsState()

  console.log('state', state.list)

  return (
    <SectionCard title="Your transactions">
      <Table columns={columns as any} data={state.list} />
    </SectionCard>
  )
}

export default TransactionHistory
