import 'free-jqgrid';

/**
 * This component is a ReactJS wrapper for JqGrid library
 */
export default class JqGrid extends React.Component {
  propTypes: {
    config: React.PropTypes.object.isRequired,

    /**
     * Grid events
     */
    onGridRendered: React.PropTypes.func,
    onGridUnloaded: React.PropTypes.func
  };

  getGrid() {
    if (!this.grid) {
      throw new Error('getGrid() should not be called before the component is mounted');
    }

    return this.grid;
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.config !== nextProps.config) {
      // This is going to happen only if complete another grid needs to injected
      this._unloadGrid();
      this._renderChart(nextProps.config);
    }

    if (this.props.onGridRendered !== nextProps.onGridRendered) {
      // Call the listner instantly if it was changed
      this.props.onGridRendered(this.grid);
    }

    return true;
  };

  componentDidMount() {
    this._renderGrid(this.props.config);
  };

  componentWillUnmount() {
    this._unloadGrid();
  };

  render() {
    return (
      <div {...this.props}>
        <table ref="grid"></table>
      </div>
    );
  };

  /**
   * Unloads jqGrid from the DOM
   * @private
   */
  _unloadGrid() {
    this.refs.grid.getDOMNode().GridUnload();

    if (this.props.onGridUnloaded) {
      this.props.onGridUnloaded(this.grid);
    }

    this.grid = null;
  };

  /**
   * Renders jqGrid into the DOM
   * @param config
   * @private
   */
  _renderGrid(config) {
    if (!config) {
      throw new Error('Config must be specified for the JqGrid component');
    }

    this.grid = jQuery( ReactDOM.findDOMNode(this.refs.grid) ).jqGrid(config);

    if (this.props.onGridRendered) {
      this.props.onGridRendered(this.grid);
    }
  };
}