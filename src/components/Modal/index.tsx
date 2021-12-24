import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useCallback, useEffect } from "react";
import { closeModal } from "store/reducers/UIModalSlice";
import { ModalWindow } from "./ModalWindow";
import { StyledModal, StyledOverlay } from "./styles";

export const Modal = () => {
  const { modal } = useAppSelector((state) => state.UIModalReducer);
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

  return (
    <StyledModal isOpened={modal.isOpened}>
      <StyledOverlay onClick={handleClose} />
      <ModalWindow />
    </StyledModal>
  );
};
