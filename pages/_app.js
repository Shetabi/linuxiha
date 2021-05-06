import React from 'react';
import '../src/styles.scss';
import theme from '../src/theme';
import {ThemeProvider} from '@material-ui/core/styles';
import Menu from '../src/components/menu'
import Header from '../src/components/header'
import { DefaultSeo } from 'next-seo';
import {absBasePath} from '../src/lib/config';

export default function App({Component, pageProps}) {
    return (
        <>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'fa_IR',
            url: 'https://linuxihaa.ir/',
            images: [
              {
                url: `${absBasePath}/images/logo.png`,
                width: 512,
                height: 512,
                alt: 'Linuxiha',
              }
            ],
            site_name: 'Linuxiha',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <ThemeProvider theme={theme}>
            <Header/>
            <Component {...pageProps}/>
            <Menu/>
        </ThemeProvider>
        </>
    )
}
