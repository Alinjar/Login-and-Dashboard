import React from 'react'
import {Line} from 'react-chartjs-2'
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js'

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement, Legend
)
export default function ChartCard() {
    const data1={
        labels:["Week 1","Week 2", "Week 3", "Week 4"],
        datasets: [{
            label:'Guest',
            data:[400,150,450,250,290],
            backgroundColor: 'transparent',
            borderColor:'#E9A0A0',
            pointBorderColor:'transparent',
            pointBorderWidth:4,
            tension: 0.5,
        },
        {
            label:'User',
            data:[300,200,400,100,250],
            backgroundColor: 'transparent',
            borderColor:'#9BDD7C',
            pointBorderColor:'transparent',
            pointBorderWidth:4,
            tension: 0.5
        }]
    };

    const options={
        plugins:{
            
            legend:  {
                position: 'top',
                align: 'end', // Position legends at the end (right)
                labels: {
                    boxWidth: 2,
                  }
            },
            title: {
                display: true,
                text: 'Activities',
                align: 'start',
                position: 'top',
                font: {
                  size: 16,
                  
                
                },
              },
        },
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                min:100,
                max:500,
                ticks:{
                    stepSize:100,
                    callback:(value)=>value
                },
                grid:{
                    borderDash:[10]
                }
            }
        },
       
        maintainAspectRatio:false,
        
       
    }
  return (
    /*<div class="mt-6 ml-4 mb-6" style={{ height: '200px', width: '1050px' }}>
        
        
        <Line data={data1} options={options}></Line>
        
    </div>*/
    <div class="bg-white 
    mt-10 ml-5 rounded-2xl  p-6 w-1050 h-fit">
    <div class="h-full w-full">
        <Line data={data1} options={options}></Line>
    </div>
</div>

  )
}
