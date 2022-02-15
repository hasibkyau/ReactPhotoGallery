import React from "react";
import { CardText } from "reactstrap";
import './footer.css'
import '../body/home-page/css/banner.css';

const FooterSection = () => {
    return (
        <div style={{}}>


            <div className="py-3 pb-3" style={{ backgroundImage: "linear-gradient(to right, rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5)),url('assets/images/bg3.jpg')", backgroundSize: "cover", height: "25vw", margin: "35px auto", }}>
                <div className="container footer-text">
                    <h1 style={{ fontSize: "3vw" }}>Thank you for visiting our site</h1>
                    <span style={{ color: "white" }}>This project has deploped by Md Hasibur Rahman</span>
                    <p style={{ color: "white" }} class="text-center">&copy; 2022 Ninja IT Corporation, Inc</p>
                </div>
            </div>

            <div class="container" style={{ textAlign: "left", color: "red", }}>
                <footer class="py-5">
                    <div class="row">
                        <div class="col-3">
                            <h5>
                                Experience Personalized Online Shopping in foodninja
                            </h5>
                            <CardText style={{ color: "gray" }}>Online Shopping BD has never been easier. foodninja.com.bd is best online shopping store in Bangladesh that features 10+ million products at affordable prices. As bangaldesh's online shopping landscape is expanding every year, online shopping in dhaka, chittagong, khulna, sylhet and other big cities are also gaining momentum. Daraz is among best websites for online shopping in bangladesh that promises fast, reliable and convenient delivery of products to your doorstep.
                            </CardText>
                        </div>


                        <div class="col-3">
                            <h5>
                                Top Categories & Brands
                            </h5>
                            <CardText>Fast Food</CardText>
                            <CardText style={{ color: "gray" }}>As bangaldesh's online shopping landscape is expanding every year, online shopping in dhaka, chittagong, khulna, sylhet and other big cities are also gaining momentum. Daraz is among best websites for online shopping in bangladesh that promises fast, reliable and convenient delivery of products to your doorstep.
                            </CardText>
                            <CardText>Burger</CardText>
                            <CardText style={{ color: "gray" }}> Daraz is among best websites for online shopping in bangladesh that promises fast, reliable and convenient delivery of products to your doorstep.
                            </CardText>

                        </div>
                        <div class="col-3">
                            <h5>
                                Experience Personalized Online Shopping in foodninja
                            </h5>
                            <CardText style={{ color: "gray" }}>Online Shopping BD has never been easier. foodninja.com.bd is best online shopping store in Bangladesh that features 10+ million products at affordable prices. As bangaldesh's online shopping landscape is expanding every year, online shopping in dhaka, chittagong, khulna, sylhet and other big cities are also gaining momentum. Daraz is among best websites for online shopping in bangladesh that promises fast, reliable and convenient delivery of products to your doorstep.
                            </CardText>
                        </div>

                    </div>
                </footer>
            </div>

            <footer class="py-0 my-0">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p class="text-center text-muted">&copy; 2021 Ninja IT Corporation, Inc</p>
            </footer>
        </div>
    );
}

export default FooterSection;