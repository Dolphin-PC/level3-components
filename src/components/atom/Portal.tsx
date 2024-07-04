import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const modalRoot = document.getElementById("portal-target");

type TProps = {
  isOpen: boolean;
  children: React.ReactNode;
  btnRef: React.RefObject<HTMLButtonElement> | null;
};

const Portal = ({ isOpen, children, btnRef }: TProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (btnRef === null || btnRef.current == null) return;
    const rect = btnRef.current.getBoundingClientRect();

    if (rect === null) return;

    // console.log({ rect });

    const { x, y, height } = rect;

    // y + height + 10 : 버튼 아래의 10px 여백
    setPosition({ x: x, y: y + height + 10 });
  }, []);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <RelativModalSection $top={position.y} $left={position.x}>
      {children}
    </RelativModalSection>,
    modalRoot as Element
  );
};

export default Portal;

const Overlay = styled.div`
  position: absolute;
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
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

interface RelativeModalSectionProps {
  $top: number;
  $left: number;
}

const RelativModalSection = styled(ModalSection)<RelativeModalSectionProps>`
  position: fixed;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
`;
