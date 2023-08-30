import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import GlobalStyles from 'themes/GlobalStyles';
import Loading from './loading';
import Head from 'next/head';
import { Html } from 'next/document';
 
export default function App({ Component, pageProps }: AppProps) {

  
    const [isLoading, setIsLoading] = useState(true);
      
    useEffect(() => {
        const storedIsLoading = localStorage.getItem('isLoading');
    
        if (storedIsLoading === 'false') {
          setIsLoading(false);
        } else {
          // Simule um carregamento demorado (por exemplo, com setTimeout)
          const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
            localStorage.setItem('isLoading', 'false');
          }, 2000);
    
          return () => {
            clearTimeout(loadingTimeout);
          };
        }
      }, []);

  return (
    <div>
        {isLoading ? (
        <Loading/>
      ) : (
       <>
            <Head>
                <title>PCs-Tecnologia</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-HDG4605RYY"></script>
                <script 
                    dangerouslySetInnerHTML={{
                        __html: 
                        `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
        
                            gtag('config', 'G-HDG4605RYY');
                        `
                    }}
                />
                 
               
            </Head>
            <GlobalStyles/> 
            <Component {...pageProps} /> 
       </>
      )}
    </div>
  )
}