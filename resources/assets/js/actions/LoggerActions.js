import alt from 'app/alt'

/**
 * Compose the logger action result object
 *
 * @param {string} type
 * @param {string|object} data
 * @returns {{type: string, date: Date, data: string}}
 */
function message(type, data) {
  return {
    type: type,
    date: new Date(),
    data: data
  }
}

/**
 * Flux actions
 */
class LoggerActions {
  debug(data) {
    return message('debug', data);
  }

  info(data) {
    return message('info', data);
  }

  notice(data) {
    return message('notice', data);
  }

  warning(data) {
    return message('warning', data);
  }

  error(data) {
    return message('error', data || 'Unknown error occurred');
  }
}

export default alt.createActions(LoggerActions);