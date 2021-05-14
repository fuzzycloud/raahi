import { url } from 'node:inspector';
import React from 'react';
import Nav from '../component/nav';

import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <Nav></Nav>
      <section id="hero-area" className=" pt-48 pb-10 content_bg" >
      <div className="container">
        <div className="flex justify-between">
          <div className="w-full text-center">
            <h2 className="text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp text-center" data-wow-delay="1s">SEARCH ALL TRAVELS DEALS IN ONE GO
              {/* <br className="hidden lg:block" />  */}
              </h2>
            <div className="text-center mb-10 wow fadeInUp" data-wow-delay="1.2s">
              {/* <a href="#"
                rel="nofollow"
                className="btn">Download Now</a> */}
                <button className="px-10 mr-5 bg-green-500 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
</svg>
  <span>Hotels</span>
</button>
<button className="px-10 bg-green-500 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor-fill" viewBox="0 0 16 16">
  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
</svg>
  <span>Flights</span>
</button>
            </div>
            {/* <div className="text-center wow fadeInUp" data-wow-delay="1.6s">
              <img className="img-fluid mx-auto" src="../static/img/hero.png" alt="hero"/>
            </div> */}
          </div>
        </div>
      </div>
    </section>
      </div>
  );
}

export default Index;
