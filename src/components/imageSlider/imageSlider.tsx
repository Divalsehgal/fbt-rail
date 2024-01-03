import  { useState } from "react";
import "./styles.css"

const ImageSlider = ({ images }:any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

    console.log( currentImageIndex);


  return (
    <div className="image-slider">
      <button onClick={prevImage} className="nav-button">
        Previous
      </button>
      <img src={images && images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      <button onClick={nextImage} className="nav-button">
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
