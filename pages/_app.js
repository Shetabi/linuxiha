import React from 'react';
import '../src/styles.scss';

export default function App({Component, pageProps}) {
    return (
        <Component {...pageProps}/>
    )
}
