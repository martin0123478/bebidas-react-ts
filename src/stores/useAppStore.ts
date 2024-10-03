import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, createRecipeSliceType } from "./RecipeSlice";
import { createFavoriteSlice, FavoriteSliceType } from "./FavoriteSlice";
import { createNotificationSlice, NotificationSliceType } from "./NotificationSlice";
export const useAppStore = create<createRecipeSliceType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))