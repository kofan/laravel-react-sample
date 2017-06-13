import connectToStores from 'alt/utils/connectToStores';
import LoggerStore     from 'app/stores/LoggerStore';
import LoggerMessages  from './LoggerMessages'

/**
 * This component renders the screen
 * where all logger messages are displayed
 */
@connectToStores
class LoggerScreen extends React.Component {
  static getStores() {
    return [ LoggerStore ];
  }

  static getPropsFromStores() {
    return { logs: LoggerStore.getState() }
  }

  componentDidMount() {
    // Induce the random logger message to be emitted
    LoggerStore.randomMessage();
  }

  /**
   * Rendering message list for each log type
   */
  render() {
    let logs = this.props.logs;

    return (
      <div className="logger-screen">
        <LoggerMessages title="Debug" className="logger-messages-debug" messages={logs.get('debug')} />
        <LoggerMessages title="Information" className="logger-messages-info" messages={logs.get('info')} />
        <LoggerMessages title="Notices" className="logger-messages-notice" messages={logs.get('notice')} />
        <LoggerMessages title="Warnings" className="logger-messages-warning" messages={logs.get('warning')} />
        <LoggerMessages title="Errors" className="logger-messages-error" messages={logs.get('error')} />
      </div>
    );
  }
}

/*
 * Export component as the module default value
 */
export default LoggerScreen;