import { Link } from 'react-router'

/**
 * Renders a simple navigation menu
 */
export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <strong>Charts</strong>
            <ul>
              <li><Link to="/charts/highcharts">Highcharts example</Link></li>
              <li><Link to="/charts/amcharts">AmCharts example</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}