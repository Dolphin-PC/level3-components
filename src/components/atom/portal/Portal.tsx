import ReactDOM from "react-dom";
import styled from "styled-components";
import { portalOpenState, portalState } from "./atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useRef } from "react";

const modalRoot = document.getElementById("portal-target");

interface Props {
  portalStateId: string;
  children: React.ReactNode;
}

const Portal = ({ children, portalStateId }: Props) => {
  const portal = useRecoilValue(portalState(portalStateId));
  const setIsOpenPortal = useSetRecoilState(portalOpenState(portalStateId));
  const portalRef = useRef<HTMLDivElement>(null);

  const { isOpen, position, isRelative, isBackDrop } = portal;

  //* isBackDroup==false && portal 본문에 해당하지 않는 부분 클릭 시, portal 닫힘
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (portalRef.current && !portalRef.current.contains(e.target as Node)) {
        setIsOpenPortal(false);
      }
    };
    if (isBackDrop == false) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isBackDrop, setIsOpenPortal]);

  const PortalSection = () => {
    if (isRelative) {
      const { left, top } = position;
      return (
        <RelativeModalSection ref={portalRef} $top={top} $left={left}>
          {children}
        </RelativeModalSection>
      );
    }

    return (
      <Overlay>
        <ModalSection ref={portalRef}>{children}</ModalSection>
      </Overlay>
    );
  };

  return (
    isOpen && ReactDOM.createPortal(<PortalSection />, modalRoot as Element)
  );
};

export default Portal;

const Overlay = styled.div`
  position: absolute;
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

interface RelativeModalSectionProps {
  $top: number;
  $left: number;
}

const RelativeModalSection = styled(ModalSection)<RelativeModalSectionProps>`
  position: fixed;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
`;
