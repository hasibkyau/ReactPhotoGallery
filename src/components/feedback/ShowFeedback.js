import React from 'react';
import { Button, CardText, CardSubtitle, Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';

const ShowFeedback = props => {
    
    return (
        <div className='col-12 col-lg-6'>
            <div>

                <Card style={{ margin: "10px", cursor: "pointer" }}>
                    <CardHeader style={{backgroundColor:"#2B323F", color:"white"}}>
                        <CardTitle>Feedback: {props.feedback.id}</CardTitle>
                    </CardHeader>
                    <CardBody style={{ textAlign: "left" }}>
                        <CardSubtitle>{props.feedback.firstname} {props.feedback.lastname}</CardSubtitle>
                        <CardText>{props.feedback.email}</CardText>
                        <CardText>{props.feedback.telnum}</CardText>
                        <CardText>Message: {props.feedback.message}</CardText>
                        
                        </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default ShowFeedback;