import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component } from "react";
import { CardSubtitle, CardGroup, CardText, Card, CardTitle, CardImg, CardBody, CardImgOverlay } from "reactstrap";
import { Form, Button, Input } from 'reactstrap';
import './banner.css'
class BannerSection extends Component {
    state = {
        handleSubmit: false,
        divWidht:null
    }

    handleSubmit = () => {
        this.setState({
            handleSubmit: !this.state.handleSubmit
        })
    }
   

    
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <div className="row" id="hello">
                            <div className="banner-text">
                                <span style={{ color: "white", fontSize: "3vw", fontStyle: "italic", }}>food</span>
                                <span style={{ color: "tomato", fontSize: "3vw", fontStyle: "italic", }}>ninja</span>
                                <h2 style={{ color: "white"}}>It's the food and groceries you love, delivered. List your restaurant or shop on foodpanda</h2>
                                {/* <Button color="danger" size="sm">Sign Up for Free</Button> */}
                                <button type="button" class="btn btn-danger btn-lg">Sign Up for Free</button>
                                

                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="container" style={{ backgroundColor: "none", textAlign: "left", paddingTop: "25px" }}>
                    <div className="row">
                        <div className="col-6 col-sm-3 col-md-2" style={{ backgroundColor: "none", padding: "20px", marginBottom: "20px", textAlign: "left", color: "tomato" }} >
                            <img className="img-fluid" src='assets/images/logos/foodninja-02.png' />
                        </div>
                        <div className="col-6 col-sm-9 col-md-10">
                            <CardTitle tag="h5">
                                List your restaurant or shop on foodninja
                            </CardTitle>
                            <span>
                                Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                                It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry ninjas – in a heartbeat!
                                Interested? Let's start our partnership today!
                            </span><br />

                            <button class="btn btn-outline-danger" style={{ backgroundColor: "none", borderColor: "tomato" }}>
                                Get Started
                            </button>
                        </div>
                    </div>


                </div>


                <div className="container" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                    <div className="row">

                    </div>
                </div>
            </div>
        );
    }
}

export default BannerSection;