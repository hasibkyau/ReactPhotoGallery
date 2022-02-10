import React from "react";
import { CardText, Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import { Button } from "reactstrap";
import dateFormat from "dateformat";

const DishDetail = (props) => {

    const comment = props.dish.comments.map(data=>{
        return(
            <Card style={{textAlign: "left"}}>
                <CardTitle>{data.author}</CardTitle>
                <CardText>{data.comment}</CardText>
                <CardText>{dateFormat(data.date, "dddd, mmmm, dS, yyyy, h:MM TT")}</CardText>
            </Card>
        ); })
        
    return (
        <div>
            <Card>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description} </CardText>
                    <CardText>Price: {props.dish.price} </CardText>
                    {comment}
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;