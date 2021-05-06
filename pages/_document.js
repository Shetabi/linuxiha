import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
class MyDocument extends Document {
    
    render() {
        return (
            <Html lang={'fa'}>
                <Head>
                    <link rel="manifest" href="/linuxiha/manifest.json"/>
                    <link rel="apple-touch-icon" href="/linuxiha/icon-512x512.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/linuxiha/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/linuxiha/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/linuxiha/favicon-16x16.png"/>
                    <meta name="msapplication-TileColor" content="#ce1919"></meta>
                    <meta name="theme-color" content="#ce1919" />
                </Head>

                <body dir={'rtl'} lang={'fa'}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument