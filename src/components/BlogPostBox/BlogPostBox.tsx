import React from 'react'

import { Box } from '..'
import { IPost } from '../../types/post'

import css from './BlogPostBox.module.scss'

interface BlogPostBoxProps {
    post: IPost
}

export const BlogPostBox: React.FC<BlogPostBoxProps> = ({ post }) => (
    <Box>
        <article className={css.container}>
            <h1>{post.title}</h1>

            <p>{post.publishedAt}</p>

            {/* TODO: Markdown renderer */}
            <p>{post.body}</p>

            <p>Read more →</p>
        </article>
    </Box>
)
