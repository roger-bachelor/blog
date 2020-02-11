import { IAuthor } from './author'
import { ICategory } from './category'
import { Slug } from './slug'

export interface IPost {
    title: string
    slug: Slug

    categories: ICategory[]
    author: IAuthor[]
    publishedAt: any

    mainImage: string

    body: string
}
