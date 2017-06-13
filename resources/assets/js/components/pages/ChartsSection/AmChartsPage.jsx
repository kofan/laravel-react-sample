import AmCharts from '../../commons/AmCharts'
import { AmCharts as data } from './data'



/**
 * Renders a AmCharts trial page
 */
export default class AmChartsPage extends React.Component {
  render() {
    return (
      <div>
        <h2> AmCharts example </h2>
        <div>
          <h3>Splines</h3>
          <AmCharts config={config.splines} isPureConfig={true} style={{height: '400px'}} />
        </div>
        <div>
          <h3>Bubbles</h3>
          <AmCharts config={config.bubbles} isPureConfig={true} style={{height: '400px'}} />
        </div>
      </div>
    );;
  }
}

/**
 * Charts config object
 */
let config = {};

/**
 * Splines charts configurations
 */
config.splines = {
  "type": "serial",
  "theme": "light",
  "marginRight": 80,
  "autoMarginOffset": 20,
  "marginTop": 7,
  "dataProvider": data.splines,
  "startDuration": '0.5',
  "valueAxes": [{
    "axisAlpha": 0,
    "dashLength": 5,
    "minimum": 1,
    "maximum": 6,
    "gridCount": 10
  }],
  "graphs": [{
    "id": "g1",
    "balloonText": "[[category]]<br/><b><span style='font-size:14px;'>value: [[value]]</span></b>",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "hideBulletsCount": 50,
    "title": "Apple",
    "valueField": "Apple",
    "useLineColorForBulletBorder": true
  }, {
    "id": "g2",
    "balloonText": "[[category]]<br/><b><span style='font-size:14px;'>value: [[value]]</span></b>",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "hideBulletsCount": 50,
    "title": "Grape",
    "valueField": "Grape",
    "useLineColorForBulletBorder": true
  }, {
    "id": "g3",
    "balloonText": "[[category]]<br/><b><span style='font-size:14px;'>value: [[value]]</span></b>",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "hideBulletsCount": 50,
    "title": "Strawberry",
    "valueField": "Strawberry",
    "useLineColorForBulletBorder": true
  }],
  "chartCursor": {
    "cursorPosition": 'mouse',
    "zoomable": false,
    "cursorAlpha": 0
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "axisColor": "#FAFAFA",
    "axisAlpha": 0,
    "minPeriod": "mm",
    "dashLength": 1,
    "gridPosition": "start",
    "position": "top",
    "minorGridEnabled": true
  },
  "dataDateFormat": "JJ:NN",
  "export": {
    "enabled": true
  }
};

/**
 * Bubbles charts configurations
 */
config.bubbles = {
  "type": "xy",
  "theme": "light",
  "balloon":{
    "fixedPosition":true,
  },
  "dataProvider": data.bubbles,
  "valueAxes": [ {
    "position": "bottom",
    "axisAlpha": 1,
    "dashLength": 2,
    "baseValue": 65
  }, {
    "minMaxMultiplier": 1.2,
    "axisAlpha": 1,
    "position": "left",
    "dashLength": 2,
    "baseValue": 50
  } ],
  "startDuration": 1.5,
  "graphs": [ {
    "balloonText":  `
      <table>
        <tr><th colspan="2"><h3>[[country]]</h3></th></tr>
        <tr><th>Fat intake:</th><td>[[x]]g</td></tr>
        <tr><th>Sugar intake:</th><td>[[y]]g</td></tr>
        <tr><th>Obesity (adults):</th><td>[[value]]%</td></tr>
      </table>
    `,
    "labelText": "[[name]]",
    "labelPosition": "[[middle]]",
    "bullet": "circle",
    "bulletBorderAlpha": 0.2,
    "bulletAlpha": 0.8,
    "lineAlpha": 0,
    "fillAlphas": 0,
    "valueField": "z",
    "xField": "x",
    "yField": "y",
    "maxBulletSize": 100
  }],
  "marginLeft": 46,
  "marginBottom": 35,
  "export": {
    "enabled": true
  }
};