import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Contact from "./body/Contact";
import { Route, Switch } from "react-router-dom";

const MainComponent = () =>{
    return(
        <div>
            <Header/>
            <Switch>
                <Route path="/" component ={Body}/>
                <Route path="/contact" component ={Contact}/>
            </Switch>
        </div>
    );
}

export default MainComponent;