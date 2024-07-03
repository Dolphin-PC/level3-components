import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalOverLay from "../atom/ModalOverLay";
import ModalContent from "../atom/ModalContent";
import GreenModalButton from "../atom/ModalButton";
import * as S from "../styles/styles";
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
        <S.Buttonbox>
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
        </S.Buttonbox>
      </ModalContent>
    </ModalOverLay>,
    modalRoot
  );
};
export default CreateGreenModal;
