import { map } from './map';

export const build = data => {
  return {
    chart: {
      map: map,
      zoomType: 'xy'
    },
    title: {
      text: null
    },
    colors: [
      'rgb(18,72,134)',
      'rgb(59,140,203)',
      'rgb(18,188,210)'
    ],
    legend: {
      enabled: false
    },
    series: [
      {
        data: data,
        name: 'Visited',
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
  };
};
