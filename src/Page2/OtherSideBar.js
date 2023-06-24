import React from 'react'
import Stat from './Stat'
import UpperNav from './UpperNav'
import ChartCard from './ChartCard'
import RoundChart from './RoundChart'
import Schedule from './Schedule'
function OtherSideBar() {
  return (
    <div class="flex flex-col ml-5">
      <UpperNav/>
      <Stat/>
      <div >
        <ChartCard/></div>
        <div class="flex flex-row"><RoundChart/>
        <Schedule/></div>
        

        </div>
        
  )
}

export default OtherSideBar