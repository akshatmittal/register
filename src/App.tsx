import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Updater from 'state/reserve-tokens/updater'
import { ThemeProvider } from 'theme-ui'
import Layout from './components/layout'
import { ROUTES } from './constants'
import { theme } from './theme'
import Exchange from './views/exchange'
import Issuance from './views/issuance'
import Market from './views/market'

/**
 * App Entry point - Handles views routing
 *
 * @returns {JSX.Element}
 */
const App = () => (
  <ThemeProvider theme={theme}>
    <Updater />
    <Router>
      <Layout>
        <Switch>
          <Route path={ROUTES.EXCHANGE}>
            <Exchange />
          </Route>
          <Route path={ROUTES.STAKE}>
            <Exchange />
          </Route>
          <Route path={ROUTES.GOVERNANCE}>
            <Exchange />
          </Route>
          <Route path={ROUTES.ISSUANCE}>
            <Issuance />
          </Route>
          <Route exact path="/market">
            <Market />
          </Route>
          <Route exact path="/">
            <Redirect to={ROUTES.ISSUANCE} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
)

export default App
