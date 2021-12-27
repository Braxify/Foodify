import {
  Dish,
  DishDescription,
  DishImage,
  DishInfo,
  DishTitle,
  RemoveDishButton,
  RemoveDishIcon,
} from "./styles";

import placeholderImage from "assets/img/placeholder.png";
import removeSvg from "assets/img/remove.svg";
import { handleFavourites } from "store/reducers/FavouritesSlice";
import { IRandomDish } from "interfaces/IRandomDish";
import { useAppDispatch } from "hooks/redux";

export interface DishCardProps {
  meal: {
    name: string;
    instructions: string;
    image: string | null;
  };
  hideRemoveButton?: boolean;
}

export function DishCard({ meal, hideRemoveButton }: DishCardProps) {
  const dispatch = useAppDispatch();

  const handleFavourite = (meal: IRandomDish) => {
    dispatch(handleFavourites(meal!));
  };

  const { name, instructions, image } = meal;
  return (
    <Dish>
      {!hideRemoveButton && (
        <RemoveDishButton
          onClick={(): void => {
            handleFavourite(meal);
          }}
        >
          <RemoveDishIcon
            src={removeSvg}
            width="30"
            height="30"
            alt="remove dish from favourites"
          />
        </RemoveDishButton>
      )}
      <DishImage src={image || placeholderImage} alt="Dish" />
      <DishInfo>
        <DishTitle>{name}</DishTitle>
        <DishDescription>{instructions}</DishDescription>
      </DishInfo>
    </Dish>
  );
}
