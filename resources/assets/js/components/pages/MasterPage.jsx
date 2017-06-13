import { Link }     from 'react-router'
import Navigation   from "../layout/Navigation"
import LoggerScreen from "../views/LoggerView"


/**
 * Renders a simple page layout
 */
export default class MasterPage extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Application Master Page
          <div> <img src="/images/logo.png" /> </div>
        </h1>

        <Navigation />

        <div className="logger-screen-container">
          <LoggerScreen />
        </div>

        <div className="main">
          {this.props.children}
        </div>
      </div>
    )
  }
}