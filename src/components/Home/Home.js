import React, { Component } from "react";
import BannerSection from "./BannerSection";
import AdvertiseSection from "./AdvertiseSection";
import PhotoSection from "./PhotoSection";

class Home extends Component {
    render() {
        document.title = "Home";
        return (
            <div>
                <BannerSection
                    companyName={{ fname: "Photo", lname: "Gallery" }}
                    title="The world of photography"
                    subtitle="This is an assignment for Bohubrihi"
                    align="left"
                    button={{ text: "Sign up for free", backgroundColor: "", size: "" }}
                />

                <AdvertiseSection
                    AdvertiseTitle='Upload your photography'
                    AdvertiseDetails="Would you like millions of people see your photography? It's simple: we list your photography lists online. Let's start our partnership today!"
                    button={{ text: "Get Started" }}
                />

                <PhotoSection />

            </div>

        );
    }
}

export default Home;