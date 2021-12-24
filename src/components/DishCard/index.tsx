import {
  Dish,
  DishDescription,
  DishImage,
  DishInfo,
  DishTitle,
} from "./styles";

import placeholderImage from "assets/img/placeholder.png";

export interface DishCardProps {
  meal: {
    name: string;
    instructions: string;
    image: string | null;
  };
}

export function DishCard({ meal }: DishCardProps) {
  const { name, instructions, image } = meal;
  return (
    <Dish>
      <DishImage src={image || placeholderImage} alt="Dish" />
      <DishInfo>
        <DishTitle>{name}</DishTitle>
        <DishDescription>{instructions}</DishDescription>
      </DishInfo>
    </Dish>
  );
}
