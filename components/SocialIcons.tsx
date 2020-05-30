import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Globe, GitHub, Slack, DollarSign } from 'react-feather'

interface SocialIconsProps {
    links?: {
        [index: string]: {
            url: string
            icon: ReactElement
            hoverColor: string
        }
    }
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => (
    <Container>
        {Object.keys(links).map((key) => (
            <Link key={key} href={links[key].url} hoverColor={links[key].hoverColor}>
                {links[key].icon}
            </Link>
        ))}
    </Container>
)

SocialIcons.defaultProps = {
    links: {
        github: {
            url: 'https://github.com/antive',
            icon: <GitHub />,
            hoverColor: '#6e5494',
        },
        slack: {
            url: 'https://antive.slack.com',
            icon: <Slack />,
            hoverColor: 'green',
        },
        website: {
            url: 'https://antive.tech',
            icon: <Globe />,
            hoverColor: '#e99',
        },
        donate: {
            url: 'https://donate.antive.tech',
            icon: <DollarSign />,
            hoverColor: 'green',
        },
    },
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 0 -6px;
`

const Link = styled.a`
    margin: 0 6px;

    color: var(--color);

    transition: color 0.3s;

    &:hover {
        color: ${(props) => props.hoverColor};
    }
`
