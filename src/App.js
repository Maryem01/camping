import React from 'react'
import "./App.css"
import {Routes, Route} from "react-router-dom";
import Navbar from "./Componnent/Navbar"
import Home from "./screens/Home"
import VisitedList from './screens/VisitedList';
import AddPlaces from "./screens/AddPlaces"


const App = () => {
  return (


    
    <div>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />
<Route path="/myList" element={<VisitedList/>} />
<Route path="/add" element={<AddPlaces/>} />

</Routes>

    </div>
          
  )
}

export default App