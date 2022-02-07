import React from "react";

const MenuItem = (props) =>{
    console.log(props);
    return(
        <div>
            <h5>{props.dish.name}</h5>
            <img className="container-fluid" src={props.dish.image}></img>
            <p>Price: {props.dish.price}</p> 
            <p>{props.dish.description}</p>      
        </div>
    );
}

export default MenuItem;