import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "constants/index";
import { IRandomDish } from "interfaces/IRandomDish";

export const fetchRandomMeal = createAsyncThunk(
  "randomDish/fetch",
  async (_, thunkAPI) => {
    try {
      const response: { data: { meals: any[] } } = await axios.get(
        `${API_URL}/random.php`
      );
      const foundMeal = response.data.meals[0];
      const meal: IRandomDish = {
        name: foundMeal.strMeal,
        instructions: foundMeal.strInstructions,
        image: foundMeal.strMealThumb,
      };
      return meal;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
