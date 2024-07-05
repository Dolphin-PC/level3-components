import * as S from "@/styles/index.style";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Text } from "../atom/text";

interface SelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const Button = forwardRef<HTMLButtonElement, SelectButtonProps>(({ value, ...props }, ref) => (
  <S.select.SelectButton ref={ref} {...props}>
    <Text>{value}</Text>
    <Text>▼</Text>
  </S.select.SelectButton>
));

export default Button;
