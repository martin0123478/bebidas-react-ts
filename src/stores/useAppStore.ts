import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, createRecipeSliceType } from "./RecipeSlice";
export const useAppStore = create<createRecipeSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))