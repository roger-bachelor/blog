import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Box, BlockContent } from '../../components'

import { IPost } from '../../types/post'
import { getPostBySlug } from '../../data/post'

import css from './Post.module.scss'

export const PostPage: React.FC<RouteComponentProps> = ({ match }) => {
    const [post, setPost] = useState<IPost>()

    useEffect(() => {
        const { slug = '' } = match.params as any

        getPostBySlug(slug)
            .then(post => setPost(post))
            .catch(err => console.log(err))
    }, [match.params])

    if (!post) {
        return <p>OOPS</p>
    }

    console.log(post.body)

    return (
        <Box>
            <article className={css.container}>
                <h1 className={css.title}>{post.title}</h1>

                <section className={css.metadata}>
                    <span>11.02.2020</span>
                </section>

                <BlockContent blocks={post.body} />
            </article>
        </Box>
    )
}
