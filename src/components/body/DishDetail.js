import React from "react";
import { CardText, Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import { Button } from "reactstrap";
const DishDetail = (props) => {

    return(
        <div>
            <Card>
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
                <CardBody style={{textAlign: "left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description} </CardText>
                    <CardText>Price: {props.dish.price} </CardText>
                </CardBody>
            </Card>
            <Button onClick={()=>props.showComment(props.dish.comments)}>comments</Button>
            
        </div>
    );
}

export default DishDetail;