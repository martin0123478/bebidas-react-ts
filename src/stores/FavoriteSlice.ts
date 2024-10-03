import { StateCreator } from "zustand";
import { Recipie } from "../types";
import { createRecipeSlice, createRecipeSliceType } from "./RecipeSlice";


export type FavoriteSliceType = {
    favorites: Recipie[]
    handleFavorite: (recipie: Recipie) => void
    favoriteExist: (id: Recipie['idDrink']) => boolean
    loadFromStorage: () => void

}

export const createFavoriteSlice: StateCreator<FavoriteSliceType & createRecipeSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
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
        createRecipeSlice(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))

    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})