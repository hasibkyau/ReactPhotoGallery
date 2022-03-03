import React from "react";
import Photos from "../../Photos";

const PhotoSection = () => {
    document.title = "Home";
    return (
        <div>
            <div >
                <div className="flex">
                    <div style={{backgroundColor:"#262626", padding:"10px"}}>
                    <h3 style={{ textAlign: "center", color: "#81B441" }}>PhotoGallery</h3>
                    </div>
                    <Photos />

                </div>

            </div>
        </div>

    );
}

export default PhotoSection;