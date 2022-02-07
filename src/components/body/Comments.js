import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

const Comments = (props) => {
    return (
        <div style={{margin: "10px"}}>
            <Card style={{textAlign: "left"}}>
                <CardTitle>{props.comment.author}</CardTitle>
                <CardText>{props.comment.comment}</CardText>
                <CardText>{dateFormat(props.comment.date, "dddd, mmmm, dS, yyyy, h:MM TT")}</CardText>
            </Card>
        </div>

    );
}

export default Comments;