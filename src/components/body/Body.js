import React from "react";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom"
import Home from "./Home/Home";
import Feedback from "../feedback/Feedback";

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/contact" exact component = {Contact}/>
                <Route path="/feedback" exact component = {Feedback}/>
                {/* <Home/> */}
            </Switch>
            
        </div>
    );
}

export default Body;