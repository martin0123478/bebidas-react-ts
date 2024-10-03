import { StateCreator } from "zustand";
import { Recipie } from "../types";

export type FavoriteSliceType = {
    favorites: Recipie[]
    handleFavorite: (recipie: Recipie) => void
}

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (set, get) => ({
    favorites: [],
    handleFavorite: (recipie) => {
        if (get().favorites.some(favorite => favorite.idDrink === recipie.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipie.idDrink)
            }))
        } else {

            set((state) => ({
                favorites: [...state.favorites, recipie]
            }))
        }

    }
})