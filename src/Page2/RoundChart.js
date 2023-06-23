import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function RoundChart() {
  const data = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
      {
        data: [2, 6, 9],
        backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: 'right',
        align: 'start',
        labels: {
          boxWidth: 4,
          boxHeight: 8,
          usePointStyle: true,
          padding: 20,
          maxWidth: 480,
          wrapText:true
          
        },
      },
    },
  };

  return (
    <div className=" flex flex-col ml-5 mt-11 bg-white rounded-2xl p-4" style={{ width: '500px', height: '200px' }}>
        <div class="flex flex-row justify-between">
        <h1 className=" font-extrabold 
        font-Montserrat text-left">Top Products</h1>
      <h4 className="text-sm mr-2 font-Montserrat text-gray-500 ">May-June 2021</h4>
        </div>
        
      <div className="flex justify-center  content-center h-full w-full">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
