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
        borderColor:'transparent'
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display:false,
        position: 'right',
        align: 'start',
        labels: {
          boxWidth: 4,
          boxHeight: 8,
          usePointStyle: true,
          padding: 20,
          maxWidth: 480,
          wrapText:true,
          font: {
            family: 'Montserrat',
            weight: '800',
            color: 'black'
          },
          
        },
      },
    },
  };

  return (
    <div className=" flex flex-col ml-5 mt-10 bg-white rounded-2xl p-4" style={{ width: '500px', height: '200px' }}>
        <div class="flex flex-row justify-between">
        <h1 className=" font-extrabold 
        font-Montserrat text-left ml-4 ">Top Products</h1>
      <h4 className="text-sm mr-2 font-Montserrat text-gray-500 ">May-June 2021</h4>
        </div>
        <div class="flex flex-row ">
      <div className="flex justify-start h-28 w-full px-12 mt-5">
        <Pie data={data} options={options} />
      </div>
      <div className="px-0 py-4 mr-10">
      <div className="flex flex-row items-center">
    <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
    <h2 className="font-bold font-Montserrat text-xs">Basic Tees</h2>
  </div>
  <div className="flex flex-row items-center ">
    <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
    <h2 className="font-bold font-Montserrat text-xs">Custom Short Pants</h2>
  </div>
  <div className="flex flex-row items-center ">
    <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
    <h2 className="font-bold font-Montserrat text-xs">Super Hoodies</h2>
  </div>
    </div>
      </div>
    </div>
  );
}
