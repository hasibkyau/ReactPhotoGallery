import React from "react";

const LOGO = () =>{
    return(
        <div>
                    <img className="img-fluid" src="assets/images/logos/logo.png" width="30px"/>
                    <span style={{color:"tomato", display:"inline", fontWeight:"bold", fontStyle:"italic", paddingLeft:"5px"}}>Photo</span>
                    <span style={{color:"black", display:"inline", fontStyle:"italic" , fontWeight:"bold"}}>Gallery</span>
        </div>
    );
}

export default LOGO;