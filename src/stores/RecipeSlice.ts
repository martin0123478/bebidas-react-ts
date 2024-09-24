import { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"

export type createRecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    fetchCategorties: () => Promise<void>
    searchRecipies: (searchFilter: SearchFilter) => Promise<void>
}

export const createRecipeSlice: StateCreator<createRecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
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

    }

})