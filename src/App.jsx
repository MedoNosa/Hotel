import React from 'react'
import NavBar from './components/NavBar'
import {Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomsDetails from './components/RoomsDetails';


export default function App() {
  const  isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <div>
   { !isOwnerPath && <NavBar/>}
   <div className='min-h-[70vh]'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/rooms' element={<AllRooms/>}/>
    <Route path='/rooms/:id' element={<RoomsDetails/>}/>
   </Routes>
   
   </div>
   <Footer/>
    </div>
  )
}
