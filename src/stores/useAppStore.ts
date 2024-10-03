import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, createRecipeSliceType } from "./RecipeSlice";
import { createFavoriteSlice, FavoriteSliceType } from "./FavoriteSlice";
export const useAppStore = create<createRecipeSliceType & FavoriteSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a)
})))