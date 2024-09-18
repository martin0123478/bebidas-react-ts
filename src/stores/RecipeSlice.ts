import { StateCreator } from "zustand"

type Category = {}
export type createRecipeSliceType = {
    categories: Category[]
}

export const createRecipeSlice: StateCreator<createRecipeSliceType> = () => ({
    categories: []
})