import React from "react";
import * as S from "../styles/styles";
interface ButtonEl {
  color: [number, number, number];
  backColor: [number, number, number];
  onClick: () => void;
  children: React.ReactNode;
}
const GreenModalButton: React.FC<ButtonEl> = ({ children, ...props }) => {
  return <S.Button onClick={props.onClick} color={props.color} backColor={props.backColor}>{children}</S.Button>;
};

export default GreenModalButton;
