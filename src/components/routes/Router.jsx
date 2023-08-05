import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destination from '../../pages/destination/Destination';
import Home from '../../pages/home/Home';
import Crew from '../../pages/crew/Crew';
import Technology from '../../pages/technology/Technology';
import Header from '../header/Header';


const Router = () => {
  return (
    
      <BrowserRouter>


      <Routes>
          
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='Destination/:idDestination' element={<Destination/>}/>
            <Route path='Crew/:idCrew' element={<Crew/>}/>
            <Route path='Technology/:idTechnology' element={<Technology/>}/>


          </Route>
        

      </Routes>

      </BrowserRouter>
  )
}

export default Router