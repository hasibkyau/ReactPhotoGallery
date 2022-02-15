import React, { Component } from "react";
import Loading from "./Loading";
import BannerSection from "./Home/BannerSection";

class Home extends Component {
    render() {
        document.title = "Home";
        return (
            <div>
                <BannerSection/>
            </div>
        );
    }
}

export default Home;