import Immutable from 'immutable';

/**
 * This component renders the single logger message
 */
export default class LoggerMessage extends React.Component {
  propTypes: {
    data: React.PropTypes.object.isRequired,
    date: undefined
  };

  construct() {
    // The computed property cannot be declared inclass definition
    this.propTypes.date = React.PropTypes.instanceOf(Date).isRequired
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.data !== nextProps.data
      || this.date !== nextProps.date
    )
  }

  render() {
    return (
      <div className="logger-message">
        <span className="logger-message-date">[{this._formatDate(this.props.date)}] </span>
        <span className="logger-message-data">{this.props.data.toString()}</span>
      </div>
    )
  }

  /**
   * @param {Date} date
   * @private
   */
  _formatDate(date) {
    let hours = date.getHours().toString()
      , minutes = date.getMinutes().toString()
      , seconds = date.getSeconds().toString();

    return (
      (hours.length   < 2 ? '0' + hours   : hours) + ':' +
      (minutes.length < 2 ? '0' + minutes : minutes) + ':' +
      (seconds.length < 2 ? '0' + seconds : seconds)
    )
  }
}