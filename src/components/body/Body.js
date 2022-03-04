import React from "react";
import Contact from "./Contact";
import {Route, Switch} from "react-router-dom"
import Home from "./Home/Home";
import Photos from "./Photos";

const Body = () => {
    return (
        <div>
            <Home/>                
        </div>
    );
}

export default Body;