import styled, { css } from "styled-components";

type StyleProps = {
  $size?: "large" | "medium" | "small";
  $color?: "primary" | "negative";
  $outline?: boolean;
};

export const Button = styled.button<StyleProps>`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;

  cursor: pointer;
  border-style: solid;

  ${({ $size: size = "medium" }) => sizeStyles[size]};
  ${({ $color: color = "primary" }) =>
    color === "primary" ? primaryStyles : negativeStyles};

  ${({ $outline: outline }) => outline && outlineStyles};
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
