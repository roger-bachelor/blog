import React from 'react'
import styled from 'styled-components'

import Head from 'next/head'

import { Header as HeaderComponent, Footer as FooterComponent } from '.'

interface PageLayoutProps {
    title: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => (
    <PageContainer>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Description>
            A bachelor project of 2020, Western Norway University of Applied Sciences.
        </Description>

        <Footer />

        <Content>{children}</Content>
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
`

const Header = styled(HeaderComponent)`
    grid-area: header;
`
const Footer = styled(FooterComponent)`
    align-self: start;
    color: black;
`

const Description = styled.p`
    grid-area: description;
`

const Content = styled.main`
    grid-area: content;
    margin: 0 auto;
`
