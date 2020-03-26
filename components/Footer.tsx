import React from 'react'
import styled from 'styled-components'

import { SocialIcons } from '.'

interface FooterProps {
    className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => (
    <FooterContainer className={className}>
        <div>
            <SocialIcons />
        </div>

        <Copyright>Antive © {new Date().getFullYear()}</Copyright>
    </FooterContainer>
)

const FooterContainer = styled.footer``

const Copyright = styled.p`
    color: var(--color);
    font-family: var(--code-font);
    font-weight: bold;
`
