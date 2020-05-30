import React from 'react'
import styled from 'styled-components'

import { Box as BaseBox, BlockContent } from '.'
import { IPost } from '../content/types/post'

interface BlogPostBoxProps {
    post: IPost
}

export const BlogPostBox: React.FC<BlogPostBoxProps> = ({ post }) => (
    <Box>
        <Wrapper>
            <h1>{post.title}</h1>

            <DateField>{new Date(post.publishedAt).toLocaleDateString()}</DateField>

            {/* TODO: Markdown renderer */}
            {/*<p>{post.body}</p>*/}

            <Body>
                <BlockContent blocks={post.body} />
            </Body>

            {/*<Segue>Read more →</Segue>*/}
        </Wrapper>
    </Box>
)

const Box = styled(BaseBox)`
    max-width: 768px;
    padding: 1rem 3rem;
`

const Wrapper = styled.div``

const DateField = styled.p`
    color: var(--accent-color);

    font-family: var(--code-font);
    font-weight: bold;
`

const Body = styled.div`
    font-family: Helvetica;
    font-weight: 200;

    line-height: 1.2;
`

const Segue = styled.p`
    color: inherit;

    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
`
