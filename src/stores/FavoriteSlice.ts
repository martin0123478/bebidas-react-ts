import { StateCreator } from "zustand";
import { Recipie } from "../types";
import { createRecipeSlice, createRecipeSliceType } from "./RecipeSlice";
import { NotificationSliceType, createNotificationSlice } from "./NotificationSlice";


export type FavoriteSliceType = {
    favorites: Recipie[]
    handleFavorite: (recipie: Recipie) => void
    favoriteExist: (id: Recipie['idDrink']) => boolean
    loadFromStorage: () => void

}

export const createFavoriteSlice: StateCreator<FavoriteSliceType & createRecipeSliceType & NotificationSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleFavorite: (recipie) => {
        if (get().favorites.some(favorite => favorite.idDrink === recipie.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipie.idDrink)
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se elimino de favoritos',
                error: false
            })
        } else {

            set((state) => ({
                favorites: [...state.favorites, recipie]
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se agrego de favoritos',
                error: false
            })
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