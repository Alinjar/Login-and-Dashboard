import React from 'react'
import Login from './LoginPart';
import Board from './Board';
function LoginFinal() {
  return (
    <div>
<div className="flex flex-row h-screen">
    <Board/>
    <Login/>
  </div>
    </div>
  )
}

export default LoginFinal