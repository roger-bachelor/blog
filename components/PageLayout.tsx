import React from 'react'
import styled from 'styled-components'

import Head from 'next/head'

import {
    Header as HeaderComponent,
    Footer as FooterComponent,
    Navbar as NavbarComponent,
} from '.'

interface PageLayoutProps {
    title: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => (
    <PageContainer>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Sidebar>
            <Header />

            <Description>
                A bachelor project of 2020, Western Norway University of Applied
                Sciences.
            </Description>

            <Footer />
        </Sidebar>

        <Detail>
            {/*<Navbar />*/}
            <Content children={children} />
        </Detail>
    </PageContainer>
)

const PageContainer = styled.div`
    /* TODO: CSS Grid and Dark Mode*/
    margin: 3rem;
    display: grid;

    grid-template-areas:
        'header content'
        'description content'
        'footer content';

    grid-auto-flow: row;

    grid-template-columns: minmax(180px, 200px) 1fr;

    grid-template-rows: min-content 1fr;

    column-gap: 3rem;

    /*place-items: start;
    place-content: start;*/

    @media only screen and (max-width: 768px) {
        display: block;
    }
`

const Sidebar = styled.div``
const Detail = styled.div``
const Navbar = styled(NavbarComponent)``
const Header = styled(HeaderComponent)`
    grid-area: header;
`
const Footer = styled(FooterComponent)`
    align-self: start;
    color: black;
`

const Description = styled.p`
    grid-area: description;

    font-weight: 300;
`

const Content = styled.main`
    grid-area: content;
`
