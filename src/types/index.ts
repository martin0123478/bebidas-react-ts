import { z } from 'zod'
import { categoriesAPIResponseSchema } from '../utils/recipies-schema'

export type Categories = z.infer<typeof categoriesAPIResponseSchema>