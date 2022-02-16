import React, { Component } from "react";
import BannerSection from "./BannerSection";
import AdvertiseSection from "./AdvertiseSection";
import MenuSection from "./MenuSection";
import BottomSection from "./BottomSection";

class HomePage extends Component {
    render() {
        document.title = "Home";
        return (
            <div>
                <BannerSection
                    companyName={{ fname: "food", lname: "ninja" }}
                    title="It's the food and groceries you love, delivered."
                    subtitle="It's the food and groceries you love, delivered. List your restuarnt or shop on foodninja"
                    align="left"
                    button={{ text: "Sign up for free", backgroundColor: "", size: "" }}
                    bgImg="url('assets/images/bg1.jpg')"
                />

                <AdvertiseSection
                    AdvertiseTitle='List your restaurant or shop on foodninja'
                    AdvertiseDetails="Would you like millions of new customers to enjoy your amazing food and groceries? So would we! It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry ninjas – in a heartbeat! Interested? Let's start our partnership today!"
                    button={{ text: "Get Started" }}
                    bgImg="url('assets/images/logos/foodninja-01.png')"

                />

                <MenuSection />

                <BottomSection />

            </div>

        );
    }
}

export default HomePage;