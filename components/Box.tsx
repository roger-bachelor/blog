import React from 'react'
import styled from 'styled-components'

interface BoxProps {
    className?: string
}

export const Box: React.FC<BoxProps> = ({ children, className }) => (
    <BoxContainer className={className}>{children}</BoxContainer>
)

const BoxContainer = styled.div`
    margin: 1em auto;

    outline: 0;

    border: 0.5px solid rgba(127, 127, 127, 0.3);
    border-radius: 24px;

    background-color: var(--background-color);

    transition: all 0.1s ease;

    border: none;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
        -9px -9px 16px rgba(255, 255, 255, 0.5);

    &:hover {
    }

    @media (prefers-color-scheme: dark) {
        background: var(--background-color);
        background: #282933;
        box-shadow: 14px 14px 39px #1b1b22, -14px -14px 39px #353744;
    }
`
