import { sanityClient as sanity } from '../sanity'
import groq from 'groq'

import { IAuthor } from '../types/author'

export const getAuthorBySlug = async (slug: string): Promise<IAuthor> =>
    (
        await sanity.fetch(groq`*[_type == "author" && slug.current=="${slug}"]`)
    )[0] as IAuthor

export const getAllAuthors = async (): Promise<IAuthor[]> =>
    (await sanity.fetch(groq`*[_type == "author"]`)) as IAuthor[]
