import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import OfficeCln from "./components/OfficeCln";
import KitchenCln from "./components/KitchenCln";
import CarWashing from "./components/CarWashing";
import FactoryCln from "./components/FactoryCln";
import ServicesRegForm from "./components/ServicesRegForm";

function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/aboutus'} element={<AboutUs/>} />
                <Route path={'/contact'} element={<Contact/>} />
                <Route path={'/officeCleaning'} element={<OfficeCln/>}/>
                <Route path={'/kitchenCleaning'} element={<KitchenCln/>}/>
                <Route path={'/carWashing'} element={<CarWashing/>}/>
                <Route path={'/factoryCleaning'} element={<FactoryCln/>}/>
                <Route path={'/officeCleaningRegister'} element={<ServicesRegForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
