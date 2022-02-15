import React, { Component } from "react";
import Loading from "./Loading";
import HomePage from "./home-page/HomePage";
class Home extends Component {
    render() {
        document.title = "Home";
        return (
            <div>
                <HomePage/>
            </div>

        );
    }
}

export default Home;