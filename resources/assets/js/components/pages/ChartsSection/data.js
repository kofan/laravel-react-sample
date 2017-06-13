'use strict';

/**
 * Exports data for Highcharts and AmCharts
 */
export let Highcharts = {};
export let AmCharts = {};

/*
 * Highcharts data
 */
Highcharts.splines = [{
  name: 'Apple',
  data: [
    [Date.parse("2012-09-19T20:38:56.319Z"), 1.92],
    [Date.parse("2012-09-19T20:54:07.919Z"), 1.72],
    [Date.parse("2012-09-19T20:57:10.239Z"), 1.68],
    [Date.parse("2012-09-19T21:03:14.879Z"), 1.74],
    [Date.parse("2012-09-19T21:06:17.199Z"), 1.74],
    [Date.parse("2012-09-19T21:24:31.119Z"), 1.82],
    [Date.parse("2012-09-19T21:45:47.359Z"), 1.88],
    [Date.parse("2012-09-19T21:48:49.679Z"), 1.86],
    [Date.parse("2012-09-19T22:00:58.959Z"), 1.92],
    [Date.parse("2012-09-19T22:19:12.879Z"), 1.9],
    [Date.parse("2012-09-19T22:22:15.199Z"), 1.9],
    [Date.parse("2012-09-19T22:37:26.799Z"), 1.84],
    [Date.parse("2012-09-19T22:43:31.439Z"), 1.86],
    [Date.parse("2012-09-19T22:46:33.759Z"), 1.84],
    [Date.parse("2012-09-19T22:49:36.079Z"), 1.82],
    [Date.parse("2012-09-19T23:07:49.999Z"), 1.82],
    [Date.parse("2012-09-19T23:10:52.319Z"), 1.8]
  ]
}, {
  name: 'Grape',
  data: [
    [Date.parse("2012-09-19T20:38:56.319Z"), 2.9],
    [Date.parse("2012-09-19T20:54:07.919Z"), 2.68],
    [Date.parse("2012-09-19T20:57:10.239Z"), 2.66],
    [Date.parse("2012-09-19T21:03:14.879Z"), 2.74],
    [Date.parse("2012-09-19T21:06:17.199Z"), 2.74],
    [Date.parse("2012-09-19T21:24:31.119Z"), 2.82],
    [Date.parse("2012-09-19T21:45:47.359Z"), 2.88],
    [Date.parse("2012-09-19T21:48:49.679Z"), 2.86],
    [Date.parse("2012-09-19T22:00:58.959Z"), 2.88],
    [Date.parse("2012-09-19T22:19:12.879Z"), 2.9],
    [Date.parse("2012-09-19T22:22:15.199Z"), 2.82],
    [Date.parse("2012-09-19T22:37:26.799Z"), 2.84],
    [Date.parse("2012-09-19T22:43:31.439Z"), 2.86],
    [Date.parse("2012-09-19T22:46:33.759Z"), 2.84],
    [Date.parse("2012-09-19T22:49:36.079Z"), 2.82],
    [Date.parse("2012-09-19T23:07:49.999Z"), 2.8],
    [Date.parse("2012-09-19T23:10:52.319Z"), 2.8]
  ]
}, {
  name: 'Strawberry',
  data: [
    [Date.parse("2012-09-19T20:38:56.319Z"), 3.55],
    [Date.parse("2012-09-19T20:54:07.919Z"), 3.6],
    [Date.parse("2012-09-19T20:57:10.239Z"), 3.65],
    [Date.parse("2012-09-19T21:03:14.879Z"), 3.7],
    [Date.parse("2012-09-19T21:06:17.199Z"), 3.8],
    [Date.parse("2012-09-19T21:24:31.119Z"), 3.85],
    [Date.parse("2012-09-19T21:45:47.359Z"), 3.45],
    [Date.parse("2012-09-19T21:48:49.679Z"), 3.5],
    [Date.parse("2012-09-19T22:00:58.959Z"), 3.55],
    [Date.parse("2012-09-19T22:19:12.879Z"), 3.7],
    [Date.parse("2012-09-19T22:22:15.199Z"), 3.5],
    [Date.parse("2012-09-19T22:37:26.799Z"), 3.75],
    [Date.parse("2012-09-19T22:43:31.439Z"), 3.8],
    [Date.parse("2012-09-19T22:46:33.759Z"), 3.55],
    [Date.parse("2012-09-19T22:49:36.079Z"), 3.65],
    [Date.parse("2012-09-19T23:07:49.999Z"), 3.7],
    [Date.parse("2012-09-19T23:10:52.319Z"), 3.75]
  ]
}];

Highcharts.bubbles = [{ data: [
  {x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium'},
  {x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany'},
  {x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland'},
  {x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands'},
  {x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden'},
  {x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain'},
  {x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France'},
  {x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway'},
  {x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom'},
  {x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy'},
  {x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia'},
  {x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States'},
  {x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary'},
  {x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal'},
  {x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand'}
]}];

/*
 * AmCharts data
 */
AmCharts.splines = _.transform(Highcharts.splines, function(result, graph, i) {
  graph.data.forEach(function(point, index) {

    if (!result[index]) { result[index] = { date: new Date(point[0]) } };
    result[index][graph.name] = point[1];

  });
});

AmCharts.bubbles = _.cloneDeep(Highcharts.bubbles[0].data);