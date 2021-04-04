import React from 'react';
import '../src/styles.scss';
import theme from '../src/theme';
import {ThemeProvider} from '@material-ui/core/styles';

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}
