import AmChartsLib from 'exports?AmCharts!amcharts3';
import /* nothing */    'amcharts3/amcharts/serial';
import /* nothing */    'amcharts3/amcharts/xy';

/**
 * This component is a ReactJS wrapper for AmCharts component
 */
export default class AmCharts extends React.Component {
  propTypes: {
    config: React.PropTypes.object.isRequired,
    isPureConfig: React.PropTypes.bool
  };

  getChart() {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }

    return this.chart;
  };

  shouldComponentUpdate(nextProps) {
    if (!this.props.isPureConfig || this.props.config !== nextProps.config) {
      this._renderChart(nextProps.config);
    }

    return true;
  };

  componentDidMount() {
    this._renderChart(this.props.config);
  };

  componentWillUnmount() {
    this.chart.clear();
    this.chart = null;
  };

  render() {
    let props = this.props;

    props = {
      ...props,
      ref: 'chart'
    };

    return <div {...props} />;
  };

  /**
   * Renders chart into the DOM
   * @param config
   * @private
   */
  _renderChart(config) {
    if (!config) {
      throw new Error('Config must be specified for the AmCharts component');
    }

    this.chart = AmChartsLib.makeChart(
      ReactDOM.findDOMNode(this.refs.chart),
      config
    );
    this.chart.pathToImages = "/extra_components/amcharts/images/";
  };
}