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
                    <CardText>     
                        <p>{props.dish.description}</p>
                        <p>Price: {props.dish.price}</p>
                        <p>{props.dish.comments[0].comment}</p>
                    </CardText>
                </CardBody>
            </Card>
            <Button onClick={()=>props.showComment(props.dish.comments)}>comments</Button>
            
        </div>
    );
}

export default DishDetail;