import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'

import Repositories from './pages/Repositories/index'
import Home from './pages/Home/index'

export default function Rotas() {
    return (
        <>
        {/* <h1>Ola mundo!</h1> */}
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/repositories" element={<Repositories />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}