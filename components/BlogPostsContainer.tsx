import React from 'react'
import styled from 'styled-components'

import { BlogPostBox } from '.'
import { IPost } from '../content/types/post'

interface BlogPostsContainerProps {
    posts: IPost[]
}

export const BlogPostsContainer: React.FC<BlogPostsContainerProps> = ({ posts }) => (
    <Container>
        {posts.map(post => (
            <BlogPostBox post={post} />
        ))}
    </Container>
)

const Container = styled.section`
    margin: 10rem;
    > * {
        margin: 100px;
    }
`
