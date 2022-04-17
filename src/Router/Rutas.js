import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import E404 from '../components/E404'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/404" element={<E404 />}></Route>
                <Route path="*" element={<E404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas