import React from "react";
import FooterBanner from "../../footer/FooterBanner";
import FooterSection from "../../footer/FooterSection";
import FooterContact from "../../footer/FooterContact";

const BottomSection = () =>{
    return(
        <div>
            <FooterBanner
            title = "Thank you for visiting our site"
            subtitle = "This project has deploped by Md Hasibur Rahman"
            copyRightText = "2022 Ninja IT Corporation, Inc"
            imgUrl = "url('assets/images/bg3.jpg')"
            />
            <FooterSection/>
            <FooterContact/>
        </div>
    );
}

export default BottomSection;