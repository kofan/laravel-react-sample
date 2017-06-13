import alt                from 'app/alt';
import LoggerActions      from 'app/actions/LoggerActions';
import RandomLoggerSource from 'app/sources/RandomLoggerSource';
import Immutable          from 'immutable'
import immutable          from 'alt/utils/ImmutableUtil';
import { datasource }     from 'alt/utils/decorators';

/**
 * This store preserve all log messages
 */
@datasource(RandomLoggerSource)
@immutable
class LoggerStore {
  constructor() {
    this.bindListeners({
      onMessage: [
        LoggerActions.debug,   LoggerActions.info, LoggerActions.notice,
        LoggerActions.warning, LoggerActions.error
      ]
    });

    this.state = Immutable.Map({
      debug:   Immutable.List(),
      info:    Immutable.List(),
      notice:  Immutable.List(),
      warning: Immutable.List(),
      error:   Immutable.List()
    });
  }

  onMessage(msg) {
    let type = msg.type;

    // Remote the type string from the message as it is redundant
    // and its removal will save a memory
    delete msg.type;

    this.setState(
      this.state.set( type, this.state.get(type).push(msg) )
    );
  }
}

export default alt.createStore(LoggerStore, 'LoggerStore')