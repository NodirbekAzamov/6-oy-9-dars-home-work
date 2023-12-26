import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Task-1/Home'
import Login from "./Components/Task-1/Login";
import CarsTable from "./Components/Task-1/CarsTable";
import SingleCar from "./Components/Task-1/SingleCar";
import Appcomponent from "./Components/Task-2/Appcomponent";

export default function App() {
  return (
    <div>
      {/* task-1 */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='carstable' element={<CarsTable />}/>
        <Route path='singlecar/:id' element={<SingleCar />}/>
      </Routes>

      {/* task-2 */}
      <Routes>
        <Route path="/" element={<Appcomponent />}/>
      </Routes>
    </div>
  )
}
