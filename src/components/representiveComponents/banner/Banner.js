import React from "react";
import './banner.css';

const Banner = () => {
    return (
        <div>
            <div class="index-banner">

                <div class="wmuSlider example1">

                    <div class="wmuSliderWrapper">

                        <article style="position: absolute; width: 100%; opacity: 0;">
                            <div class="banner-wrap">
                                <div class="banner_center">
                                    <h1>hello world,</h1>
                                    <h2>This is <span>Hasibur Rahman</span></h2>
                                    <h2>from Bangladesh</h2>
                                </div>
                            </div>
                        </article>

                        <article style="position: relative; width: 100%; opacity: 1;">
                            <div class="banner-wrap">
                                <div class="banner_center">
                                    <h1>I'm a,</h1>
                                    <h2>Graphics <span>& WebDeveloper</span></h2>
                                    <h2></h2>
                                </div>
                            </div>
                        </article>

                        <article style="position: absolute; width: 100%; opacity: 0;">
                            <div class="banner-wrap">
                                <div class="banner_center">
                                    <h1>Thank you</h1>
                                    <h2>for visiting <span>Our site</span></h2>
                                    <h2>reproduced below</h2>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
                <script src="js/jquery.wmuSlider.js"></script>
                <script>
                    $('.example1').wmuSlider();
                </script>
            </div>
        </div>
    )
}

export default Banner;