import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import ModalContent from "../atom/ModalContent";
import ModalOverLay from "../atom/ModalOverLay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const root = document.getElementById("modal");
const CreateRedModal: React.FC<ModalProps> = ({
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
    <ModalOverLay onClick={onClose}>
      <ModalContent>
        {children}
        <CloseButton onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            width={"15px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </CloseButton>
      </ModalContent>
    </ModalOverLay>,
    modalRoot
  );
};
export default CreateRedModal;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgb(158, 156, 156);
  padding: 8px 10px;
`;
