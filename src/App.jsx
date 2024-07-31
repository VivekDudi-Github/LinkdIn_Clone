import { useState } from 'react'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='bg-black min-h-[100vh]'>

      <Outlet/>

    </div>
    </>
  )
}

export default App
