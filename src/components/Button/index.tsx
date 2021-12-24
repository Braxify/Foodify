import { PropsWithChildren, ReactNode } from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color?: string;
  fullWidth?: boolean;
}

export function ButtonComponent({
  children,
  onClick,
  color,
  fullWidth,
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton onClick={onClick} color={color} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  );
}

export const Button = ButtonComponent;
