import { z } from 'zod'
import { SearchFilterSchema, categoriesAPIResponseSchema, DrinksAPIResponseSchema, DrinkAPIResponseSchema, RecipeAPIResponseSchema } from '../utils/recipies-schema'

export type Categories = z.infer<typeof categoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>
export type Drink = z.infer<typeof DrinkAPIResponseSchema>
export type Recipie = z.infer<typeof RecipeAPIResponseSchema>