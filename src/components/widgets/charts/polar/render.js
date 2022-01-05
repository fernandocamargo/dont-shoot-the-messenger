import highcharts from 'highcharts';
import enhance from 'highcharts/highcharts-more';
import { useMemo } from 'react';
import Highcharts from 'highcharts-react-official';

enhance(highcharts);

export default ({ categories, className, series }) => {
  const options = useMemo(
    () => ({
      chart: { polar: true, type: 'line' },
      legend: { align: 'right', verticalAlign: 'middle', layout: 'vertical' },
      xAxis: { categories, lineWidth: 0, tickmarkPlacement: 'on' },
      yAxis: { gridLineInterpolation: 'polygon', lineWidth: 0, min: 0 },
      credits: false,
      title: false,
      series,
    }),
    [categories, series]
  );

  return (
    <div className={className}>
      <Highcharts highcharts={highcharts} options={options} />
    </div>
  );
};
