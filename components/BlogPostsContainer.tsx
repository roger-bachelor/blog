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
    display: grid;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 30px;
`
