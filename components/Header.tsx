import React from 'react'
import styled from 'styled-components'

interface HeaderProps {
    className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => (
    <HeaderContainer className={className}>
        <Title>Antive</Title>
        <Subtitle>Blog</Subtitle>
    </HeaderContainer>
)

const HeaderContainer = styled.header`
    font-weight: bold;
    font-size: 4rem;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`

const Title = styled.p`
    margin: 0;

    color: var(--color);
`

const Subtitle = styled.p`
    margin: -1rem 0;

    color: var(--accent-color);
`
