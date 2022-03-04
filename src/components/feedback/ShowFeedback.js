import React from 'react';
import { Button, CardText, CardSubtitle, Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const ShowFeedback = props => {
    console.log(props);
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
            <div>

                <Card style={{ margin: "10px", cursor: "pointer" }}>
                    <CardBody style={{ textAlign: "left" }}>
                        <span>{props.feedback.firstname}</span>

                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default ShowFeedback;