import React from "react";
import * as S from "../styles/styles";

interface ModalProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ModalOverLay: React.FC<ModalProps> = ({ children, ...props }) => {
  return <S.ModalOverlay {...props}>{children}</S.ModalOverlay>;
};

export default ModalOverLay;