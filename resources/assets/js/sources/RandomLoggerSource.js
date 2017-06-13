import LoggerActions from 'app/actions/LoggerActions'

const MESSAGES = [
  'Don\'t worry, be happy!',
  'Freeeedoooom!',
  'I don\'t know where I am!',
  'It\'s Kharkiv City!'
];

const RandomLoggerMessages = {
  randomMessage: {
    /**
     * Emulate that the message come from the remote source
     */
    remote(state) {
      return new Promise(function(resolve, reject) {
        resolve( MESSAGES[_.random(0, MESSAGES.length - 1)] );
      });
    },

    /**
     * We want always to return new message that's why we don't use local state
     */
    local(state) {
      return null;
    },

    /**
     * Data source handler actions
     */
    error: LoggerActions.error,
    success: LoggerActions.info
  }
};

export default RandomLoggerMessages;