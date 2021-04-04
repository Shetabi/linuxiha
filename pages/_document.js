import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body dir={'rtl'} lang={'fa'}>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument