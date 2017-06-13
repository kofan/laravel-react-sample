import Immutable     from 'immutable';
import classnames    from 'classnames'
import LoggerMessage from './LoggerMessage'

/**
 * This component renders the list of logger messages
 */
export default class LoggerMessages extends React.Component {
  propTypes: {
    messages: undefined,
    title: React.PropTypes.string
  };

  construct() {
    // The computed property cannot be declared inclass definition
    this.propTypes.messages = React.PropTypes.instanceOf( Immutable.List ).isRequired
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.messages !== nextProps.messages
      || this.title !== nextProps.title
    )
  }

  render() {
    // concatenate classes
    let classes = classnames('logger-messages', this.props.className || '');

    // dynamically render the messages
    let messages = this.props.messages.map((m) => {
      return <LoggerMessage key={m.date.getTime()} date={m.date} data={m.data} />
    });

    return (
      <div className={classes}>
        <h4>{this.props.title || 'Logger Messages'}</h4>
        <div>{messages.size ? messages : 'There are no any logs at the moment'}</div>
      </div>
    )
  }
}