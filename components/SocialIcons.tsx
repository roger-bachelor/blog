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
        {Object.keys(links).map(key => (
            <Link href={links[key].url} hoverColor={links[key].hoverColor}>
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
            hoverColor: '',
        },
        slack: {
            url: 'https://antive.slack.com',
            icon: <Slack />,
            hoverColor: '',
        },
        website: {
            url: 'https://antive.tech',
            icon: <Globe />,
            hoverColor: '',
        },
        donate: {
            url: 'https://donate.antive.tech',
            icon: <DollarSign />,
            hoverColor: '',
        },
    },
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`

const Link = styled.a`
    margin: 6px;
    color: var(--color);

    transition: color 0.3s;

    &:hover {
        color: ${props => props.hoverColor};
    }
`
