import React from 'react'
import { Globe, GitHub, Slack, DollarSign } from 'react-feather'

import css from './SocialIcons.module.scss'

export const SocialIcons = () => (
    <section className={css.container}>
        <a href="https://github.com/antive" className={css.github}>
            <GitHub />
        </a>

        <a href="https://antive.slack.com" className={css.slack}>
            <Slack />
        </a>

        <a href="https://antive.tech" className={css.website}>
            <Globe />
        </a>

        <a href="https://antive.donate" className={css.donate}>
            <DollarSign />
        </a>
    </section>
)
