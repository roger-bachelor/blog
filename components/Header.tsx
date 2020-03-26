import React from 'react'
import styled from 'styled-components'

interface HeaderProps {
    className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => (
    <HeaderContainer className={className}>
        <Title>Antive</Title>
        <br />
        <Subtitle>Blog</Subtitle>
    </HeaderContainer>
)

const HeaderContainer = styled.header`
    font-weight: bold;
    font-size: 72px;
`

const Title = styled.span`
    color: var(--color);
`

const Subtitle = styled.span`
    color: var(--accent-color);
`
