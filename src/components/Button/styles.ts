import styled from "styled-components";
import theme from "styles/theme";

export interface ButtonProps {
  color?: string;
  fullWidth?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.color ? props.color : theme.colors.gray};
  padding: 10px 28px;
  color: ${theme.colors.black};
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 18px;
  width: ${(props) => (props.fullWidth ? "100%" : "192px")};
`;
