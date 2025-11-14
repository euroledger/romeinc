import React from 'react';
import './ImageGrid.css'; // Import the CSS file

const ImageGrid = ({ images, cols }) => {
  const cname = "image-gallery" + cols
  console.log("cname=", cname)
  return (
    <div className={cname} style={{marginLeft: "6rem"}}>
      {images.map((image, index) => (
        <div key={index} className="grid-item">
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
