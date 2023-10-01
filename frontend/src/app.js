import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'

const app = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <div className='pages'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default app