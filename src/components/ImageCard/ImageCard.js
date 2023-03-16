import React from "react";

const ImageCard = ({ children, imageUrl }) => {

  return (
    <div className="imageCard">
        <img src={imageUrl}></img>
        {children}
    </div>
  )

}


export default ImageCard;