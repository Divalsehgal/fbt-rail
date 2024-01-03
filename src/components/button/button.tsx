import "./styles.css"

function Button({ title, toggleModal }: any) {
  return (
    <div className="button-container" onClick={toggleModal}>
      {title}
    </div>
  );
}

export default Button