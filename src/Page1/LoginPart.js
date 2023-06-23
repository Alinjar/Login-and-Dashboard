import React from 'react'
import LoginForm from './LoginForm'
import SignGoog from './SignGoog'
function Login() {
  return (
    <div className="bg-[#F5F5F5] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-left text-4xl font-Montserrat font-extrabold leading-9 tracking-tight text-gray-900">
        Sign In
      </h2>
      <h4 className=" text-left text-1xl font-Montserrat leading-9 tracking-tight text-gray-900">Sign in to your account</h4>
      <div class="mt-5 flex justify-stretch gap-6">
      <SignGoog/>
    <button class="py-1 bg-white border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
    <img class="ml-2 px-1 w-6 h-6" src="https://www.svgrepo.com/show/69341/apple-logo.svg" loading="lazy" alt="google logo"></img>
    <span class="text-sm mr-2 mt-0.5 px-2 font-Montserrat tracking-tight text-gray-900">Sign in with Apple</span>
    </button>
    </div>
    </div>
    
    
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <LoginForm/>
      <p className="mt-5 text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <a href="#" className="text-[#346BD4] font-semibold leading-6 text-forg-blue hover:text-indigo-500">
         Register here
        </a>
      </p>
    </div>
    </div>
  
  )
}

export default Login