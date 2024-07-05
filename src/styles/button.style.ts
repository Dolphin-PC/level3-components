import styled, { css } from "styled-components";

type StyleProps = {
  $size?: "large" | "medium" | "small";
  $color?: "primary" | "negative";
  $outline?: boolean;
};

export const Button = styled.button<StyleProps>`
  border-radius: 8px;
  font-weight: 600;

  cursor: pointer;
  border-style: solid;

  ${({ $size = "medium" }) => sizeStyles[$size]};
  ${({ $color = "primary" }) =>
    $color === "primary" ? primaryStyles : negativeStyles};

  ${({ $outline: outline }) => outline && outlineStyles};
`;

export const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

const largeStyles = css`
  width: 200px;
  height: 50px;
`;

const mediumStyles = css`
  width: 130px;
  height: 45px;
`;

const smallStyles = css`
  width: 100px;
  height: 40px;
`;

const sizeStyles = {
  large: largeStyles,
  medium: mediumStyles,
  small: smallStyles,
};

const negativeStyles = css`
  color: rgb(214, 48, 49);
  background-color: rgb(250, 177, 160);
  border-color: rgb(250, 177, 160);
`;

const primaryStyles = css`
  background-color: rgb(85, 239, 196);
  border-color: rgb(85, 239, 196);
`;

const outlineStyles = css`
  background-color: white;
  border-width: 3px;
`;



export const Overlay = styled.div`
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

export const ModalSection = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

interface RelativeModalSectionProps {
  $top: number;
  $left: number;
}

export const RelativeModalSection = styled(ModalSection)<RelativeModalSectionProps>`
  position: fixed;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
`;
