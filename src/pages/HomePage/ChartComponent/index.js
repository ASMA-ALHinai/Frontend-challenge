
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const GenericChart = ({ chartType, data, options }) => {
  let ChartComponent;

  switch (chartType) {
    case 'bar':
      ChartComponent = Bar;
      break;
    case 'line':
      ChartComponent = Line;
      break;
    case 'pie':
      ChartComponent = Pie;
      break;
    default:
      return <p>Unsupported chart type</p>;
  }

  return <ChartComponent data={data} options={options} />;
};

export default GenericChart;
