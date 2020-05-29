import React from 'react'

import { default as BC } from '@sanity/block-content-to-react'

import { config } from '../content/sanity/client'

interface BlockContentProps {
    blocks: any
}

const serializers: any = {
    types: {
        // block: (props: any) => <></>,
        // image: (props: any) => <></>,
        code: (props: any) => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
        ),
    },
}

// TODO: Fix styling
export const BlockContent: React.FC<BlockContentProps> = ({ blocks }) => (
    <BC
        blocks={blocks}
        serializers={serializers}
        className={'body'}
        projectId={config.projectId}
        dataset={config.dataset}
    />
)
