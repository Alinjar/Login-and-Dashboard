import React from 'react'

function SignGoog() {
  return (
   <>
   <button class="py-1 bg-white border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
    <img class="ml-2 px-1 w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"></img>
    <span class="text-sm mr-2 mt-0.5 px-2 font-Montserrat tracking-tight text-gray-900">Sign in with Google</span>
    </button>
   </>
  )
}

export default SignGoog