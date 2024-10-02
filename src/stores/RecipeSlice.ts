import { StateCreator } from "zustand"
import { getCategories, getRecipieById, getRecipies } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipie, SearchFilter } from "../types"

export type createRecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    selecteRecipie: Recipie
    fetchCategorties: () => Promise<void>
    searchRecipies: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipeSlice: StateCreator<createRecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
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
            selecteRecipie
        })
    }

})