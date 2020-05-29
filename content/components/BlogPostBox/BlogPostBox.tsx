import React from 'react'

import { Box } from '..'
import { IPost } from '../../types/post'

import css from './BlogPostBox.module.scss'
import { BlockContent } from '../BlockContent'

interface BlogPostBoxProps {
    post: IPost
}

export const BlogPostBox: React.FC<BlogPostBoxProps> = ({ post }) => (
    <Box className={css.box}>
        <article className={css.container}>
            <h1>{post.title}</h1>

            <p className={css.publishedAt}>11.02.2020</p>

            {/* TODO: Markdown renderer */}
            {/*<p>{post.body}</p>*/}

            <section className={css.body}>
                <BlockContent blocks={post.body} />
            </section>

            {/*<p className={css.readmore}>Read more →</p>*/}
        </article>
    </Box>
)
