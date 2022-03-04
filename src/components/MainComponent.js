import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Contact from "./body/Contact";
import { Routes, Route } from "react-router";
import Feedback from "./feedback/Feedback";

const MainComponent = () =>{
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
            </Routes>
        </div>
    );
}

export default MainComponent;