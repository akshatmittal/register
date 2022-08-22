import { t, Trans } from '@lingui/macro'
import { InfoBox } from 'components'
import useRToken from 'hooks/useRToken'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { accountRoleAtom, walletAtom } from 'state/atoms'
import { Box, Card, Divider, Grid, Text } from 'theme-ui'
import DeploymentStepTracker from 'views/deploy/components/DeployStep'
import GovernanceHero from './components/GovernanceHero'

const Management = () => {
  const account = useAtomValue(walletAtom)
  const accountRole = useAtomValue(accountRoleAtom)
  const rToken = useRToken()
  const navigate = useNavigate()

  // Guard route in case the user doesnt have role
  useEffect(() => {
    const isManager =
      accountRole.freezer || accountRole.owner || accountRole.pauser

    if (!rToken || !account || !isManager) {
      navigate('/')
    }
  }, [accountRole, rToken?.address])

  return (
    <Box>
      {accountRole.owner && (
        <>
          <DeploymentStepTracker step={5} />
          <GovernanceHero mx={3} p={5} />
          <Divider my={3} sx={{ borderColor: 'darkBorder' }} />
        </>
      )}

      <Box p={5}>
        <Text variant="title" px={3} sx={{ fontSize: 4 }}>
          {rToken?.symbol} <Trans>Manager</Trans>
        </Text>
        <Grid columns={2} mt={4} gap={5}>
          <Card>
            <Text variant="title">
              <Trans>Basic Info</Trans>
            </Text>
            <Divider my={3} />
            <InfoBox mb={3} title={t`Token name`} subtitle={rToken?.name} />
            <InfoBox title={t`Token ticker`} subtitle={rToken?.symbol} />
          </Card>
          <Box variant="layout.borderBox">TODO TODO Copy</Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Management