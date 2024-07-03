// import React from 'react'
import styled from "styled-components";
interface ModalProps {
  children: React.ReactNode;
}
const StopProp = (evnet:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  evnet.stopPropagation();
};
const ModalContent:React.FC<ModalProps> = ({children}) => {
  return <Modalcontent onClick={StopProp}>{children}</Modalcontent>;
};

export default ModalContent;
const Modalcontent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
