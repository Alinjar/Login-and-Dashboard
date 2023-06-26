import React from 'react'

function UpperNav() {
  return (
    <div class="mt-3 mr-5">

<nav class="border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <div class="flex items-center"> 
      <a href="#" class="flex items-center">
        <span class="font-Montserrat font-black text-2xl whitespace-nowrap dark:text-white">Dashboard</span>
      </a>
    </div>
    <div class="flex items-center space-x-4"> 
      <div class="relative">
        <input type="text" class="h-9 w-30 pr-2 pl-5 rounded-xl focus:shadow focus:outline-none" placeholder="Search..."/>
        <div class="absolute top-3 right-3">
        <svg
          className="h-3 w-4 fill-current text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: 'new 0 0 56.966 56.966' }}
          xmlSpace="preserve"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
        </div>
      </div>
      <div class="mr-3">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>

      </div>
      <div class="flex items-center"> 
        <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span class="sr-only"></span>
          <img class="w-8 h-8 rounded-full" src="public/adore des1.png" alt="user photo"/>
        </button>
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default UpperNav