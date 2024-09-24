import axios from "axios"
import { DrinksAPIResponseSchema, categoriesAPIResponseSchema } from "../utils/recipies-schema"
import { SearchFilter } from "../types"


export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios(url)
    const result = categoriesAPIResponseSchema.safeParse(data)
    if (result) {
        return result.data
    }
}

export async function getRecipies(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&$i=${filters.ingredient}`
    const { data } = await axios(url)
    const result = DrinksAPIResponseSchema.safeParse(data)
    if (result) {
        return result.data
    }
} 