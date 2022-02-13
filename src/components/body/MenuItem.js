import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={baseUrl + props.dish.image}
                        style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: "pointer" }}
                            onClick={props.DishSelect}
                        >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;