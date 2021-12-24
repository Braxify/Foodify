import styled from "styled-components";
import { StyledButton } from "components/Button/styles";

export const StyledWindow = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.black};
  width: ${({ theme }) => theme.sizes.modal.width}px;
  max-width: 90%;
  padding: 28px;
  @media ${({ theme }) => theme.media.medium} {
    width: 100vw;
    max-width: 100%;
  }
`;

export const StyledWindowActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const StyledTitle = styled.h2`
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 36px;
  font-size: 18px;
  @media ${({ theme }) => theme.media.medium} {
    margin-bottom: 16px;
  }
`;

export const StyledForm = styled.form`
  padding: 14px;

  @media ${({ theme }) => theme.media.medium} {
    padding: 5px;
  }
`;

export const StyledInput = styled.input`
  padding: 8px 18px;
  border: 1px solid #acacac;
  margin-bottom: 17px;
  width: 100%;
  outline: 0;
  font-size: 18px;

  ::placeholder {
    color: #b5b5b5;
  }
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid #acacac;
  resize: none;
  margin-bottom: 17px;
  padding: 8px 18px;
  width: 100%;
  outline: 0;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  line-height: 21px;

  ::placeholder {
    color: #b5b5b5;
  }
`;

export const StyledFormButton = styled(StyledButton)`
  border: 1px solid #acacac;
  font-weight: 500;
  background: #dadada;

  :disabled {
    background-color: gray;
  }
`;
