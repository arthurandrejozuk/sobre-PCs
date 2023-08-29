import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import GlobalStyles from 'themes/GlobalStyles';
import Loading from './loading';
 
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
            <GlobalStyles/> 
            <Component {...pageProps} /> 
       </>
      )}
    </div>
  )
}