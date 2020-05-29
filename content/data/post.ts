import { sanityClient as sanity } from '../sanity'
import groq from 'groq'

import { IPost } from '../types/post'

export const getPostBySlug = async (slug: string): Promise<IPost> =>
    (await sanity.fetch(
        groq`*[_type == "post" && slug.current == "${slug}"][0]`,
    )) as IPost

export const getAllPosts = async (): Promise<IPost[]> =>
    (await sanity.fetch(groq`*[_type == "post"]`)) as IPost[]
