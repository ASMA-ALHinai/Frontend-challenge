
export const barChartData = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export const barChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
  maintainAspectRatio: false, 
};





export const lineChartData = {
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

export const lineChartOptions = {
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