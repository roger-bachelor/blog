import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

// Getting da slugs
import { getPostBySlug } from '../../data/post'

import css from './Post.module.scss'

import { IPost } from '../../types/post'

export const PostPage: React.FC<RouteComponentProps> = ({ match }) => {
    const [post, setPost] = useState<IPost>()

    useEffect(() => {
        const { slug = '' } = match.params as any

        getPostBySlug(slug)
            .then(post => setPost(post))
            .catch(err => console.log(err))
    }, [match.params])

    return (
        <>
            {post ? (
                <article>
                    <h1>{post.title}</h1>
                    <p>{post.slug.current}</p>
                </article>
            ) : (
                <p>OOPS</p>
            )}
        </>
    )
}
