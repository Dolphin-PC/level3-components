import ReactDOM from "react-dom";
import styled from "styled-components";

const modalRoot = document.getElementById("portal-target");

type TProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Portal = ({ isOpen, children }: TProps) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ModalSection>{children}</ModalSection>
    </Overlay>,
    modalRoot as Element
  );
};

export default Portal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalSection = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
