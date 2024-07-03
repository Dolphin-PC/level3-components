import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import ModalOverLay from "../atom/ModalOverLay";
import ModalContent from "../atom/ModalContent";
import GreenModalButton from "../atom/ModalButton";
// import { ModalOverLay } from "./atom/ModalOverLay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const root = document.getElementById("modal");
const CreateGreenModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (root) setModalRoot(root);
  }, []);
  if (!isOpen || !modalRoot) return null;
  return createPortal(
    <ModalOverLay>
      <ModalContent>
        {children}
        <Buttonbox>
          <GreenModalButton
            color={[214, 48, 49]}
            backColor={[250, 177, 160]}
            onClick={onClose}
          >
            Close
          </GreenModalButton>
          <GreenModalButton
            color={[0, 0, 0]}
            backColor={[5, 239, 196]}
            onClick={() => console.log("on!")}
          >
            Confirm
          </GreenModalButton>
        </Buttonbox>
      </ModalContent>
    </ModalOverLay>,
    modalRoot
  );
};
export default CreateGreenModal;

const Buttonbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
`;
