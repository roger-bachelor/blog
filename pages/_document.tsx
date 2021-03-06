import React from 'react'

import Document, { Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ReactElement } from 'react'

type StyledDocumentProps = {
    styleTags: ReactElement
}

export default class StyledDocument extends Document<StyledDocumentProps> {
    static async getInitialProps({ renderPage }: DocumentContext) {
        const sheet = new ServerStyleSheet()

        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

        const styleTags = sheet.getStyleElement()

        return { ...page, styleTags }
    }

    render() {
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
