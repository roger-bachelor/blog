import React from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownProps {
    markdown: string
}

export const Markdown: React.FC<MarkdownProps> = ({ markdown }) => (
    <ReactMarkdown source={markdown} />
)
