import React from 'react';

function Schedule() {
  return (
    <div className="flex flex-col justify-evenly ml-11 mt-10 bg-white rounded-2xl p-4" style={{ width: '500px', height: '200px' }}>
        <div class="flex flex-row justify-between">
        <h1 class="ml-3 mb-1 font-Montserrat font-extrabold">Today's Schedule</h1>
        <a href="#" class="text-sm mr-2 font-Montserrat text-gray-500 no-underline hover:underline">See All</a>
        </div>
        
       
      <div className="flex ml-4">
        <div className="w-1 bg-[#9BDD7C] h-full mr-4"></div>
        <div> 
          <h2 className="text-gray-700 font-Montserrat font-bold text-sm">Meeting with suppliers from Kuta Bali</h2>
          <h2 className="text-gray-500 font-Montserrat text-sm">14:00-15:00</h2>
          <h4 className="text-gray-500 text-xs font-Montserrat">at Sunset Road, Kuta, Bali</h4>
        </div>
      </div>
      <div className="flex ml-4">
        <div className="w-1 bg-[#6972C3] h-full mr-4"></div>
        <div> 
          <h2 className="text-gray-700 font-Montserrat font-bold text-sm">Check operation at Giga Factory 1</h2>
          <h2 className="text-gray-500 font-Montserrat text-sm">18:00-20:00</h2>
          <h4 className="text-gray-500 text-xs font-Montserrat">at Central Jakarta</h4>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
