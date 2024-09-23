import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories, SearchFilter } from "../types"

export type createRecipeSliceType = {
    categories: Categories,
    fetchCategorties: () => Promise<void>
    searchRecipies: (searchFilter: SearchFilter) => Promise<void>
}

export const createRecipeSlice: StateCreator<createRecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategorties: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipies: async (filters) => {
        console.log(filters)
    }

})