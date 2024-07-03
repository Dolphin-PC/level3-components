import React from "react";
import styled from "styled-components";
interface ButtonEl {
  color: [number, number, number];
  backColor: [number, number, number];
  onClick: () => void;
  children: React.ReactNode;
}
type StyledButtonProps = Pick<ButtonEl, "color" | "backColor">;
const rgbToString = (rgb: [number, number, number]) =>
  `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
const GreenModalButton: React.FC<ButtonEl> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default GreenModalButton;

const Button = styled.button<StyledButtonProps>`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(re) => rgbToString(re.backColor)};
  color: ${(re) => rgbToString(re.color)};
  height: 40px;
  width: 100px;
`;
