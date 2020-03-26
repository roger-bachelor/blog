import React from 'react'
import styled from 'styled-components'

interface BoxProps {
    className?: string
}

export const Box: React.FC<BoxProps> = ({ children, className }) => (
    <BoxContainer className={className}>{children}</BoxContainer>
)

const BoxContainer = styled.div`
    border-radius: 24px;

    outline: 0;

    transition: all 0.1s ease;

    background-color: var(--background-color);

    box-shadow: -9px -9px 16px var(--neumorphic-leading-shadow-color),
        9px 9px 16px var(--neumorphic-trailing-shadow-color);

    &:hover {
        /* TODO */
    }
`
