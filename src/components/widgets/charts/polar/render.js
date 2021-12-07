import highcharts from 'highcharts';
import enhance from 'highcharts/highcharts-more';
import Highcharts from 'highcharts-react-official';

enhance(highcharts);

const options = {
  xAxis: {
    categories: [
      'Algorithms',
      'Computational Complexity Theory',
      'Data Structures',
      'Concepts & Patterns',
      'SQL',
      'Design Patterns',
    ],
    tickmarkPlacement: 'on',
    lineWidth: 0,
  },
  series: [
    {
      data: [43, 19, 60, 35, 17, 10],
      name: 'Easy',
      color: '#52bc77',
    },
    {
      data: [50, 39, 42, 31, 26, 14],
      name: 'Medium',
      color: '#ffb800',
    },
    {
      data: [70, 59, 42, 71, 26, 14],
      name: 'Hard',
      color: '#f21313',
    },
  ],
  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0,
  },
  legend: { align: 'right', verticalAlign: 'middle', layout: 'vertical' },
  chart: { polar: true, type: 'line' },
  title: false,
  credits: false,
};

export default ({ className }) => (
  <div className={className}>
    <Highcharts highcharts={highcharts} options={options} />
  </div>
);
