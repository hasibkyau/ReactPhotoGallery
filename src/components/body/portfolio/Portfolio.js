import React from "react";
import BannerSection from "../Home/components/BannerSection";
import AdvertiseSection from "../Home/components/AdvertiseSection";
import MenuSection from "../Home/components/MenuSection";
import FooterBanner from "../Home/components/FooterBanner";
import FooterBody from "../Home/components/FooterBody";
import FooterContact from "../Home/components/FooterContact";


const Portfolio = () =>{
    return(
        <div>

        <BannerSection
        companyName={{ fname: "hasib's", lname: "portfolio" }}
                    title="Welcome to my site."
                    subtitle="It's the food and groceries you love, delivered. List your restuarnt or shop on foodninja"
                    align="left"
                    button={{ text: "Subscribe", backgroundColor: "", size: "" }}
                    bgImg="assets/images/banner.jpg"
                
        />

        
<AdvertiseSection
                    AdvertiseTitle='List your restaurant or shop on foodninja'
                    AdvertiseDetails="Would you like millions of new customers to enjoy your amazing food and groceries? So would we! It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry ninjas – in a heartbeat! Interested? Let's start our partnership today!"
                    button={{ text: "Get Started" }}
                    bgImg='assets/images/hasibsmall.jpg'

                />

                <MenuSection />

                <FooterBanner
                    title="Thank you for visiting our site"
                    subtitle="This project has deploped by Md Hasibur Rahman"
                    copyRightText="2022 Ninja IT Corporation, Inc"
                    bgImg="assets/images/bg0.jpg"
                />
                <FooterBody/>
                <FooterContact />


</div>

        
    );
}

export default Portfolio;