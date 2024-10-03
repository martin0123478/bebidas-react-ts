import { StateCreator } from "zustand"
import { getCategories, getRecipieById, getRecipies } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipie, SearchFilter } from "../types"
import { FavoriteSliceType } from "./FavoriteSlice"

export type createRecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    selecteRecipie: Recipie,
    modal: boolean
    fetchCategorties: () => Promise<void>
    searchRecipies: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipeSlice: StateCreator<createRecipeSliceType & FavoriteSliceType, [], [], createRecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    modal: false,
    selecteRecipie: {} as Recipie,
    fetchCategorties: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipies: async (filters) => {
        const drinks = await getRecipies(filters)
        set({
            drinks
        })

    },
    selectRecipe: async (id) => {
        const selecteRecipie = await getRecipieById(id)
        set({
            selecteRecipie,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selecteRecipie: {} as Recipie
        })
    }

})