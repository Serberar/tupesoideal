import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Portada from '../pages/Portada';
import Productos from '../components/Productos';

function Path(){
    return(
        <div>
            <Routes>
            <Route exact path="/" element={<Portada/>} />
            <Route path="/productos" element={<Productos/>} />
            </Routes>

        </div>
    )
}

export default Path;