import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Footer from './components/Footer'
import { RouterProvider,NavLink,Router,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Rivalries from './components/Rivalries'
import SuperStars from './components/SuperStars'
import Layout from './components/Layout'
import Gmoat from './components/Gmoat'
import Login from './components/Login'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<><Hero/><Hero2/></>}/>
    <Route path='/rivalries' element={<Rivalries/>}/>
    <Route path='/superstars' element={<SuperStars/>}/>
    <Route path='/gmoat' element={<Gmoat/>}/>
    <Route path='/login' element={<Login/>}/>
    </Route>
  )
)
const App = () => {
  return (
    <>
    <div >
      {/* <Navbar/>
      <Hero/>
      <Hero2/>
     <Footer/> */}
     <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
