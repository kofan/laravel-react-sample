let HighchartsReact   = null
  , requiredListeners = [];

/**
 * This is a wrapper for Highcharts react components
 * which provides ability to load the highcharts deferredly
 */
export default class Highcharts extends React.Component {
  constructor() {
    super();

    this.displayName = "HighchartsDeferred";
  }

  static getCoreLibrary() {
    return HighchartsReact ? HighchartsReact.Highcharts : null;
  }

  static require(callback) {
    if (callback) {
      Highcharts.addRequiredListener(callback);
    }

    /*
     * This is a point where the code will be splitted by webpack
     */
    require.ensure([ 'react-highcharts/more' ], (require) => {
      HighchartsReact = require( 'react-highcharts/more' );

      requiredListeners.forEach(function(callback) {
        callback( Highcharts.getCoreLibrary() )
      });
    });
  }

  static addRequiredListener(callback) {
    requiredListeners.push(callback);
  }

  componentDidMount() {
    if (!HighchartsReact) {
      Highcharts.require(() => { this.forceUpdate(); })
    }
  }

  getChart() {
    return this.refs.higcharts.getChart();
  }

  render() {
    return HighchartsReact ? (

      <HighchartsReact {...this.props} ref="higcharts" />

    ) : (

      <div className="highcharts-loader">
        <span className="highcharts-loader-text">
          Highcharts is loading...
        </span>
      </div>

    );
  }
}