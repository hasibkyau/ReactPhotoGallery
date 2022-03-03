import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Contact from "./body/Contact";
import { Routes, Route } from "react-router";

const MainComponent = () =>{
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default MainComponent;