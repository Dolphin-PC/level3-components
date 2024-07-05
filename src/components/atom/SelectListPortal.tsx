import * as S from "@/styles/index.style";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("portal-target");

type TProps = {
  isOpen: boolean;
  children: React.ReactNode;
  btnRef: React.RefObject<HTMLButtonElement> | null;
};

const SelectListPortal = ({ isOpen, children, btnRef }: TProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (btnRef === null || btnRef.current == null) return;
    const rect = btnRef.current.getBoundingClientRect();

    if (rect === null) return;

    const { x, y, height } = rect;

    // y + height + 10 : 버튼 아래의 10px 여백
    setPosition({ x: x, y: y + height + 10 });
  }, []);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.select.RelativModalSection $top={position.y} $left={position.x}>
      {children}
    </S.select.RelativModalSection>,
    modalRoot as Element
  );
};

export default SelectListPortal ;
