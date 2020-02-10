import React from 'react'

import css from './Box.module.scss'

export const Box: React.FC = ({ children }) => (
    <div className={css.container}>{children}</div>
)
