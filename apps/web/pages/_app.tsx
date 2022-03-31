import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
import 'tailwindcss/tailwind.css';
// import '../dist/dist/output.css'
import Nav from '../components/nav';
import Footer from '../components/footer';
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web-raahi!</title>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.11.1/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>
        {/* <link href="../dist/output.css" rel="stylesheet"/> */}
      </Head>

      <div className="app">
        {/* <main>
          <Nav></Nav>
          <Component {...pageProps} />
          
       <Footer></Footer>
          
        </main> */}
        <div className="flex flex-col h-screen justify-between">
  <header className=""> <Nav></Nav></header>
  <main className="mb-auto "><Component {...pageProps} /></main>
  <footer className=""> <Footer></Footer></footer>
</div>
        
      </div>
      
    </>
  );
}

export default CustomApp;
