import React from "react";
import { CardText, Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";
import CommentForm from "./CommentForm";

const DishDetail = (props) => {
    const comment = props.comments.map(data=>{
        return(
            <Card style={{textAlign: "left", padding:"20px", margin:"10px auto"}} key={data.id}>
                <h5>{data.author}</h5>
                <CardText>{data.comment}</CardText>
                <CardText>Rating: {data.rating}</CardText>
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
                    <h4>Comments:</h4>
                    {comment}
                    <hr/>
                    <CommentForm dishId = {props.dish.id}/>
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;