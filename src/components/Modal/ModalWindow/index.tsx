import useForm from "hooks/form";
import { useAppDispatch } from "hooks/redux";
import { FormEvent } from "react";
import { addToFavourites } from "store/reducers/FavouritesSlice";
import { closeModal } from "store/reducers/UIModalSlice";
import theme from "styles/theme";
import {
  StyledForm,
  StyledFormButton,
  StyledInput,
  StyledTextarea,
  StyledTitle,
  StyledWindow,
} from "./styles";

export const ModalWindow = () => {
  const dispatch = useAppDispatch();

  const validatorConf = {
    name: {
      isLength: {
        min: 1,
      },
    },
    instructions: {
      isLength: {
        min: 1,
      },
    },
  };
  const { value, disabled, changeHandler, cleanForm } = useForm(validatorConf);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addToFavourites(value));
    handleClose();
    setTimeout(() => {
      cleanForm();
    }, theme.durations.ms300);
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <StyledWindow>
      <StyledTitle>Add custom dish</StyledTitle>
      <StyledForm onSubmit={submitHandler}>
        <StyledInput
          onChange={changeHandler}
          value={value.name}
          type="text"
          name="name"
          placeholder="Dish title"
          required
        />
        <StyledTextarea
          name="instructions"
          placeholder="Dish description..."
          onChange={changeHandler}
          value={value.instructions}
          rows={6}
          required
        />
        <StyledFormButton type="submit" disabled={disabled} fullWidth>
          Add custom dish
        </StyledFormButton>
      </StyledForm>
    </StyledWindow>
  );
};
