import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

import { AlignLeft } from 'react-feather'
import { Box } from '.'

interface NavbarProps {
    className?: string
    items: Array<{
        name: string
        path: string
    }>
}

export const Navbar: React.FC<NavbarProps> = ({ className, items }) => (
    <Box className={className}>
        <NavContainer>
            <AlignLeft />

            <Items>
                {items.map(item => (
                    <Item>
                        <Link href={item.path}>{item.name}</Link>
                    </Item>
                ))}
            </Items>
        </NavContainer>
    </Box>
)

Navbar.defaultProps = {
    items: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
    ],
}

const NavContainer = styled.nav`
    padding: 0.5rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Items = styled.ul`
    display: flex;

    flex-direction: row;

    list-style: none;
`

const Item = styled.li`
    padding: 0 1rem;

    font-family: var(--main-font);
    font-weight: bold;
`

const Link = styled(NextLink)`
    color: var(--color);
    text-decoration: none !important;
`
