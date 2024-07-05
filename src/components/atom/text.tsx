import React, { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Text: React.FC<TextProps> = ({ children }) => <p>{children}</p>;
