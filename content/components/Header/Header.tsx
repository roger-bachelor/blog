import React from 'react'

import css from './Header.module.scss'

export const Header = () => (
    <header className={css.container}>
        <span className={css.top}>Antive</span>
        <br />
        <span className={css.blog}>Blog</span>
    </header>
)
