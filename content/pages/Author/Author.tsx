import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import css from './Author.module.scss'

export const AuthorPage: React.FC<RouteComponentProps> = () => (
    <article className={css.container}>
        <h1>Author</h1>
    </article>
)
