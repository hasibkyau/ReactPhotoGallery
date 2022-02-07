import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
const Comments = (props) => {
    return (
        <div style={{margin: "10px"}}>
            <Card style={{textAlign: "left"}}>
                <CardTitle>{props.comment.author}</CardTitle>
                <CardText>
                    <p>{props.comment.comment}</p>
                    <p>{props.comment.date}</p>
                </CardText>

            </Card>
        </div>

    );
}

export default Comments;