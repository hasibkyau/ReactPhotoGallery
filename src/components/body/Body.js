import React from "react";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home";
import Photos from "./Photos";

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Photos />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default Body;