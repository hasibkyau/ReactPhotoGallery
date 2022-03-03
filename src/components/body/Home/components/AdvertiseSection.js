import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { CardImg, CardTitle } from "reactstrap";
import '../css/banner.css'
import bgImg from '../../../../assets/images/bg1.jpg';

const AdvertiseSection = (props) => {
    return (
        <div>

            <div className="flex" style={{ backgroundColor: "none", textAlign: "left", paddingTop: "25px" }}>
                <div className="row">

                    <div className="col-6 col-sm-3 col-md-2" style={{ textAlign: "left", color: "tomato" }} >
                        <img className="img-fluid" src={bgImg} />
                    </div>

                    <div className="col-6 col-sm-9 col-md-10">
                        <CardTitle tag="h5">{props.AdvertiseTitle}</CardTitle>
                        <span>{props.AdvertiseDetails}
                        </span><br />

                        <button className="btn btn-outline-danger" style={{ backgroundColor: "none", borderColor: "tomato" }}>
                            {props.button.text}
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

export default AdvertiseSection;