import "./styles.css";

const SideModal = ({ isOpen, onClose, children }: any) => {
  const handleOverlayClick = () => {
    if (isOpen) {
      onClose();
    }
  };
  return (
    <div className={`side-modal ${isOpen ? "open" : ""}`}>
      <div className="overlay" onClick={handleOverlayClick}></div>
      <div className="modal-content">

        {children}
      </div>
    </div>
  );
};

export default SideModal;
