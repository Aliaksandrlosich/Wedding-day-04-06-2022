import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Schedule from '../pages/Schedule/index'
import Photo from '../pages/Photo/index'
import Contact from '../pages/Contact/index'
import Home from '../pages/Home/index'

export default function Routs () {

 return (
  <Routes>
   <Route exact path="" element={<Home/>}/>
   <Route path="contact" element={<Contact/>}/>
   <Route path="schedule" element={<Schedule/>}/>
   <Route path="photo" element={<Photo/>}/>
  </Routes>
 )
}
