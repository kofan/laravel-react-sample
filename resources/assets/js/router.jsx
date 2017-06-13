import { Router, Route, Link, IndexRoute } from 'react-router'
import { createHashHistory }               from 'history'
import LoggerActions                       from './actions/LoggerActions'
import Pages                               from './components/pages'

/*
 * Create HashHistory for React Router
 */
let history = createHashHistory({ queryKey: false });

/*
 * Log the route path
 */
function logTheRoute() {
  LoggerActions.debug(`You've visited "${this.state.location.pathname}"`);
}

/*
 * Build application routing system
 */
export default (
  <Router history={history} onUpdate={logTheRoute}>
    <Route path="/" component={Pages.MasterPage}>
      <IndexRoute component={Pages.HomePage} />

      <Route path="about" component={Pages.AboutPage} />

      <Route path="charts/">
        <Route path="highcharts" component={Pages.ChartsSection.HighchartsPage} />
        <Route path="amcharts" component={Pages.ChartsSection.AmChartsPage} />
      </Route>
    </Route>
  </Router>
);
