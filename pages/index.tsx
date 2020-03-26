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
        return <></>
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
    margin: 0 1rem;

    display: grid;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 3rem;

    @media only screen and (max-width: 768px) {
        display: block;
    }
`

export default HomePage
