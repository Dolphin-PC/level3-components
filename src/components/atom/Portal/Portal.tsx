import ReactDOM from "react-dom";
import { portalOpenState, portalState } from "./atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useRef } from "react";
import * as S from "@/styles/index.style";

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
        <S.button.RelativeModalSection ref={portalRef} $top={top} $left={left}>
          {children}
        </S.button.RelativeModalSection>
      );
    }

    return (
      <S.button.Overlay>
        <S.button.ModalSection ref={portalRef}>
          {children}
        </S.button.ModalSection>
      </S.button.Overlay>
    );
  };

  return (
    isOpen && ReactDOM.createPortal(<PortalSection />, modalRoot as Element)
  );
};

export default Portal;
