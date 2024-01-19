import React from "react";
import "./ImageModal.css";



const ImageModal = ({ image, onClose }) => {
  
  return (
    <div className="modal-container">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={image.src.medium} alt={image.alt} className="modal-img" />
        <p>
          <h4>
            <b>{image.photographer}</b>
          </h4>
          <p>{image.alt}</p>
          <a href={image.url} target="_blank" className="btn">Check it out!</a>
        </p>
      </div>
    </div>
  );
};

export default ImageModal;
