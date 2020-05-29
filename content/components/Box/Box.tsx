import React from 'react'

import css from './Box.module.scss'

interface BoxProps {
    className?: string
}

export const Box: React.FC<BoxProps> = ({ children, className }) => (
    <div className={`${css.container} ${className}`}>{children}</div>
)
