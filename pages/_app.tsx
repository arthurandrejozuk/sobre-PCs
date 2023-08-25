import type { AppProps } from 'next/app';
import React from 'react';
import GlobalStyles from 'themes/GlobalStyles';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyles/>
        <Component {...pageProps} />
    </>
  )
}