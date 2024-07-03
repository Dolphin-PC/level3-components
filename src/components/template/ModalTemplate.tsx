import * as S from "@/styles/index.style";
import { useState } from "react";
import Portal from "../atom/Portal";

const ModalTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <h1>Modal</h1>

      <S.button.Button onClick={openModal}>open modal</S.button.Button>
      <Portal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is a modal content.</p>
      </Portal>
    </>
  );
};

export default ModalTemplate;
