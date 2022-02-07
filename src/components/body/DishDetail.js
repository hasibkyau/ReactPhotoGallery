import React from "react";
import { CardText, Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const DishDetail = (props) => {
    return(
        <div>
            <Card>
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
                <CardBody style={{textAlign: "left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>     
                        <p>{props.dish.description}</p>
                        <p>Price: {props.dish.price}</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;