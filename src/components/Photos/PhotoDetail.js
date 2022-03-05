import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from '../Comments/LoadComments';
import CommentForm from '../Comments/CommentForm';
import { baseUrl } from '../../redux/baseUrl';

const PhotoDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={baseUrl + props. photo.image} alt={props. photo.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props. photo.name}</CardTitle>
                    <CardText>
                        {props. photo.description}
                    </CardText>
                    <hr />
                    <CardTitle tag="h4">Comments:</CardTitle>
                    <LoadComments comments={props.comments} commentIsLoading = {props.commentIsLoading}></LoadComments>
                    <hr />
                    <CommentForm  photoId={props. photo.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    );
}

export default PhotoDetail;