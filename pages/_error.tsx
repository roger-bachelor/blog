import React from 'react'
import styled from 'styled-components'

import { PageLayout } from '../components'

const NotFoundPage = () => (
    <PageLayout title="Antive | 404">
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
    </PageLayout>
)

export default NotFoundPage
