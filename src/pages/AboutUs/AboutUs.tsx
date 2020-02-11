import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import css from './AboutUs.module.scss'

export const AboutUsPage: React.FC<RouteComponentProps> = () => (
    <article className={css.container}>
        <h1>About Us</h1>
    </article>
)
