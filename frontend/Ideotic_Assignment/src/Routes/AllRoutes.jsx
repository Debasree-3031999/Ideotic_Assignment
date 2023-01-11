import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import List from './List';
import Detail from './Detail';
import Register from './Register';


export default function AllRoutes() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path='/list' element={<List />} />
                <Route path='/list/:detail' element={<Detail />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
