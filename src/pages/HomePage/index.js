

import React from 'react';
import './homePage.css';
import GenericChart from './ChartComponent';
import Layout from '../../../src/components/shared/Breadcrumb';


const HomePage = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [{
      label: 'Monthly Sales',
      data: [10, 20, 30, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  
   const lineChartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Visitors',
        data: [30, 45, 28, 60],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }
    ],
  };
  
   const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Visitors per Month'
      }
    }
  };
  const breadcrumbs = [
    { title: "Home", path: "/" },
    { title: "Dashboard", path: "/" },
  ];
  return (

    <div className="p-4">

<Layout title="Dashboard" breadcrumbs={breadcrumbs}>
          </Layout>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <div className="p-4">
      <h2 className="font-bold text-xl mb-2">Bar Chart</h2>
      <GenericChart chartType="bar" data={barData} options={barOptions} />
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <div className=" p-4">
      <h2 className="font-bold text-xl m-auto">Pie Chart</h2>
      <GenericChart chartType="line" className="font-bold text-xl m-auto" data={lineChartData} options={lineChartOptions} />
    </div>
  </div>
</div>
</div>
  );
};

export default HomePage;
