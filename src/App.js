import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Favorites from "./pages/Favorites"

function App() {    
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Photos />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    )
}

export default App