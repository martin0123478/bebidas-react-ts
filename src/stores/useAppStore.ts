import { create } from "zustand";
import { createRecipeSlice, createRecipeSliceType } from "./RecipeSlice";
export const useAppStore = create<createRecipeSliceType>((...a) => ({
    ...createRecipeSlice(...a)
}))