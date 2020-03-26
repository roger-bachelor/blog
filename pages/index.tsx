import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { IPost } from '../content/types/post'
import { getAllPosts } from '../content/data/post'
import { BlogPostBox, PageLayout } from '../components'

const HomePage = () => {
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
        <PageLayout title="Antive | Home">
            <Container>
                {posts.map(post => (
                    <BlogPostBox key={post._id} post={post} />
                ))}
            </Container>
        </PageLayout>
    )
}

const Container = styled.div`
    > * {
        margin: 3rem auto;
    }
`

export default HomePage
