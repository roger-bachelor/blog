import React from 'react'

import css from './Footer.module.scss'
import { SocialIcons } from '../SocialIcons'

export const Footer = () => (
    <div className={css.container}>
        <p className={css.description}>Heisann.</p>
        <div className={css.icons}>
            <SocialIcons />
        </div>
        <p className={css.copyright}>Antive © 2020</p>
    </div>
)
