import React from 'react'

function Stat() {
  return (
    <div class="flex mt-1 ml-5 gap-7">
        <div class="flex flex-row grow-0 bg-[#DDEFE0] p-6 gap-8 mr-6 rounded-3xl " style={{width:'221.053px',height:'120px'}}>
    <div class="mt-6">
      <div class="text-xs font-Lato ">Total Revenues</div>
      <div class="text-4xl" style={{ fontSize: "24px", fontWeight: 700 }}>$2,129,430</div>
    </div>
    <div class="mt-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
						<path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
						<path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
					</svg>
    </div>
  </div>
  <div class="flex flex-row shrink-0 grow-0 bg-[#F4ECDD] p-6 gap-8 mr-6 rounded-3xl "  style={{width:'221.053px',height:'120px'}}>
    <div class="w-[90%] mt-3">
      <div class="text-xs font-Lato ">Total Transactions</div>
      <div class="text-4xl" style={{ fontSize: "24px", fontWeight: 700 }}>1,520</div>
    </div>
    <div class="pl-14">
    <svg class="w-5 h-5" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
    </div>
  </div>
  <div class="flex flex-row grow-0 bg-[#EFDADA] p-6 gap-8 mr-6 rounded-3xl "  style={{width:'221.053px',height:'120px'}}>
    <div class="mt-3">
      <div class="text-xs font-Lato ">Total Likes</div>
      <div class="text-4xl" style={{ fontSize: "24px", fontWeight: 700 }}>9721</div>
    </div>
    <div class="pl-11 ml-8">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-5 fill-current dark:text-gray-400">
						<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
					</svg>
    </div>
  </div>
  <div class="flex flex-row grow-0 bg-[#DEE0EF] p-6 gap-8 mr-6 rounded-3xl "  style={{width:'221.053px',height:'120px'}}>
    <div class="mt-3">
      <div class="text-xs font-Lato ">Total Users</div>
      <div class="text-4xl" style={{ fontSize: "24px", fontWeight: 700 }}>892</div>
    </div>
    <div class="pl-20">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    </div>
  </div>
  </div>
  )
}

export default Stat