import Modal from "./Modal";
import { UseModal } from "../Hooks/useModal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = UseModal(false);
  const [isOpenModal2, openModal2, closeModal2] = UseModal(false);
  const [isOpenModalPortal, OpenModalPortal, CloseModalPortal] =
    UseModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals"></img>
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/technology"></img>
      </Modal>

      <button onClick={OpenModalPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={CloseModalPortal}>
        <h3>Modal 2</h3>
        <p>Contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/nature"></img>
      </ModalPortal>
    </div>
  );
};

export default Modals;
