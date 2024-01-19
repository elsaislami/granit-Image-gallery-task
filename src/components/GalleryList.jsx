import React from "react";
import "./GalleryList.css";

const GalleryList = ({ images, onImageClick, fetchMoreImages }) => {
  const handleImageClick = (image) => {
    onImageClick(image);
  };
  return (
    <>
      <div className="gallery-container">
        {images.map((image) => (
          <div className="gallery-image-card" onClick={() => handleImageClick(image)}>
            <img
              className="gallery-image"
              key={image.id}
              src={image.src.small}
              alt={image.alt}
              
            />
            <p>
              <h4>
                <b>{image.photographer}</b>
              </h4>
              <p>{image.alt}</p>
            </p>
          </div>
        ))}
      </div>
      {images.length > 0 ? (
        <div className="pagination-container">
          <button onClick={fetchMoreImages} className="btn">
            Load More
          </button>
        </div>
      ) : (
        <p>No images, try search again!</p>
      )}
    </>
  );
};

export default GalleryList;
