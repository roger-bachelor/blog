import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import css from './404.module.scss'

export const NotFoundPage: React.FC<RouteComponentProps> = () => (
    <article className={css.container}>
        <h1>
            We could not find that page{' '}
            <span aria-label="Eyes Emoji" role="img">
                👀
            </span>
        </h1>

        <p>
            But, we will keep looking. In the meantime, please check the URL or try
            again.
        </p>
    </article>
)
