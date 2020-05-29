import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'

import css from './Home.module.scss'
import { IPost } from '../../types/post'
import { getAllPosts } from '../../data/post'
import { BlogPostBox } from '../../components'

export const HomePage: React.FC<RouteComponentProps> = () => {
    const [posts, setPosts] = useState<IPost[]>()

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .catch(console.error)
    }, [])

    if (!posts) {
        return <>Please wait.</>
    }

    return (
        <div className={css.container}>
            {posts.map(post => (
                <BlogPostBox key={post._id} post={post} />
            ))}
        </div>
    )
}
