import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';
import { baseUrl } from '../../redux/baseUrl';

const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Price: {props.dish.price}/-
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments}></LoadComments>
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;