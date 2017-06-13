import Highcharts             from '../../commons/Highcharts';
import { Highcharts as data } from './data'

/**
 * Renders a Highcharts trial page
 */
export default class HighchartsPage extends React.Component {
  render() {
    return (
      <div>
        <h2> Highcharts example </h2>
        <div>
          <h3>Splines</h3>
          <Highcharts config={config.splines} isPureConfig={true} style={{height: '400px'}} />
        </div>
        <div>
          <h3>Bubbles</h3>
          <Highcharts config={config.bubbles} isPureConfig={true} style={{height: '400px'}} />
        </div>
      </div>
    );
  }
}

/**
 * Charts config object
 */
let config = {};

/**
 * We want to use Highcharts.dateFormat method
 * but we should wait until the librart is loaded
 */
Highcharts.addRequiredListener(function(hc) {
  config.splines.tooltip.formatter = function() {
    return `
      <div><strong>${this.series.name}</strong></div>
      <div>${hc.dateFormat('%e. %b', this.x)}: ${this.y} m</div>
    `;
  }
});

/**
 * Splines charts configurations
 */
config.splines = {
  chart: {
    renderTo: 'highcharts-container',
    type: 'spline'
  },
  title: {
    text: 'Average prices'
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      month: '%e. %b',
      year: '%b'
    }
  },
  yAxis: {
    title: {
      text: 'average price'
    },
    min: 0
  },
  tooltip: { /** @see handler for addRequiredListener */ },
  series: data.splines
};

/**
 * Bubbles charts configurations
 */
config.bubbles = {
  chart: {
    type: 'bubble',
    plotBorderWidth: 1,
    zoomType: 'xy'
  },
  legend: {
    enabled: false
  },
  title: {
    text: 'Sugar and fat intake per country'
  },
  xAxis: {
    gridLineWidth: 1,
    title: {
      text: 'Daily fat intake'
    },
    labels: {
      format: '{value} gr'
    },
    plotLines: [{
      color: 'black',
      dashStyle: 'dot',
      width: 2,
      value: 65,
      label: {
        align: 'middle',
        rotation: 0,
        y: 15,
        style: {
          fontStyle: 'italic'
        },
        text: 'Safe fat intake 65g/day'
      },
      zIndex: 3
    }]
  },
  yAxis: {
    startOnTick: false,
    endOnTick: false,
    title: {
      text: 'Daily sugar intake'
    },
    labels: {
      format: '{value} gr'
    },
    maxPadding: 0.2,
    plotLines: [{
      color: 'black',
      dashStyle: 'dot',
      width: 2,
      value: 50,
      label: {
        align: 'right',
        style: {
          fontStyle: 'italic'
        },
        text: 'Safe sugar intake 50g/day',
        x: -10
      },
      zIndex: 3
    }]
  },
  tooltip: {
    useHTML: true,
    headerFormat: '<table>',
    pointFormat: `
      <tr><th colspan="2"><h3>{point.country}</h3></th></tr>
      <tr><th>Fat intake:</th><td>{point.x}g</td></tr>
      <tr><th>Sugar intake:</th><td>{point.y}g</td></tr>
      <tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>
    `,
    footerFormat: '</table>',
    followPointer: true
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },

  series: data.bubbles
};