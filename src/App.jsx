import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Route, Routes } from 'react-router-dom'
import CostumerRouters from './Routers/CostumerRouters'

import AdminRouters from './Routers/AdminRouters'
import Routers from './Routers/Routers'

  


function App() {
  const isAdmin=true;

  return (
    <>
    
    <Routes>
      <Route path='/*' element={<CostumerRouters/>}></Route>
      <Route path="/admin/*" element={<AdminRouters />} />

    </Routes>
 
    </>
  )
}

export default App
