import { sanityClient as sanity } from '../sanity'
import groq from 'groq'

import { ICategory } from '../types/category'

export const getCategoryBySlug = async (): Promise<ICategory> =>
    (await sanity.fetch(groq`*`))[0] as ICategory

export const getAllCategories = async (): Promise<ICategory[]> =>
    (await sanity.fetch(groq`*`)) as ICategory[]
