import React from 'react';
import '../src/styles.scss';
import theme from '../src/theme';
import {ThemeProvider} from '@material-ui/core/styles';
import Menu from '../src/components/menu'
import Header from '../src/components/header'
import { Head } from 'next/document';

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Component {...pageProps}/>
            <Menu/>
        </ThemeProvider>
    )
}
