import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
import 'tailwindcss/tailwind.css';
// import '../dist/dist/output.css'
import Nav from '../components/nav';
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
    
      <Head>
        <title>Welcome to web-raahi!</title>
        {/* <link href="../dist/output.css" rel="stylesheet"/> */}
      </Head>
      
      <div className="app">
      
        <main>
          {/* <Nav></Nav> */}
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
