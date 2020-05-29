import React from 'react'

import { BlogPostBox } from '..'
import { IPost } from '../../types/post'

import css from './BlogPostsContainer.module.scss'

interface BlogPostsContainerProps {
    posts: IPost[]
}

export const BlogPostsContainer: React.FC<BlogPostsContainerProps> = ({ posts }) => (
    <section className={css.container}>
        {posts.map(post => (
            <BlogPostBox post={post} />
        ))}
    </section>
)
