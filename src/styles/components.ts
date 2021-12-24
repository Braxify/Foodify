import styled from "styled-components";
import theme from "styles/theme";

export const Container = styled.div`
  max-width: 1266px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  @media ${({ theme }) => theme.media.medium} {
    max-width: 100%;
  }
`;

export const StyledLoading = styled.span`
  color: ${theme.colors.cyan};
`;
export const StyledError = styled.span`
  color: ${theme.colors.red};
`;
