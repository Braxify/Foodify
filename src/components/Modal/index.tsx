import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { closeModal } from "store/reducers/UIModalSlice";
import { ModalWindow } from "./ModalWindow";
import { StyledModal, StyledOverlay } from "./styles";

const portalDiv = document.getElementById("modal-root") as HTMLElement;

export const Modal = () => {
  const { modal } = useAppSelector((state) => state.UIModal);
  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [handleEsc]);

  return createPortal(
    <StyledModal isOpened={modal.isOpened}>
      <StyledOverlay onClick={handleClose} />
      <ModalWindow />
    </StyledModal>,
    portalDiv
  );
};
