import React from "react";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home";
import Photos from "./Photos";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Photos />} />
                <Route path="/contact" element={<Contact />} />
            </Switch>
        </div>
    );
}

export default Body;