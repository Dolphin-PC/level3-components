import React from "react";
import styled from "styled-components";

interface ModalProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ModalOverLay:React.FC<ModalProps> = ({children,...props}) => {
  return <ModalOverlay {...props} >{children}</ModalOverlay>;
};

export default ModalOverLay
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
