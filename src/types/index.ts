import { z } from 'zod'
import { SearchFilterSchema, categoriesAPIResponseSchema } from '../utils/recipies-schema'

export type Categories = z.infer<typeof categoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>