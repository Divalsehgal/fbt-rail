import { useEffect } from "react";
import "./styles.css";

const ProductModal = ({ isOpen, onClose, children }:any) => {
  const closeModal = () => {
    onClose();
  };

  const handleOutsideClick = (event:any) => {
    if (event.target.className === "product-modal open") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`product-modal ${isOpen ? "open" : ""}`}>
      <div className="product-modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default ProductModal;
