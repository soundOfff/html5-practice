import "./Modal.css";

// Children hace referencia al contenido interno del componente
// No es necesario mandarle nada

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalConteinerClick = (e) => e.stopPropagation();

  return (
    <article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-conteiner" onClick={handleModalConteinerClick}>
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
