import { IAuthor } from './author'
import { ICategory } from './category'
import { Slug } from './slug'
import { SanityMeta } from './sanity-meta'

export interface IPost extends SanityMeta {
    title: string
    slug: Slug

    categories: ICategory[]
    author: IAuthor[]
    publishedAt: any

    mainImage: string

    body: string
}
