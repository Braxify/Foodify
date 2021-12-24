import styled from "styled-components";
import { rgba } from "polished";

export const StyledModal = styled.div<{ isOpened: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 24px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: ${({ theme }) => rgba(theme.colors.overlay, 0.5)};
  z-index: ${({ theme }) => theme.zindex.modal};
  transition: opacity ${({ theme }) => theme.durations.ms300}ms ease;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  pointer-events: ${({ isOpened }) => (isOpened ? "all" : "none")};
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
