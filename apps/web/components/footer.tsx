import React from 'react';
export default function Footer() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return(
    <footer className=" bg-green-500 p-4 text-center text-white bottom-0">
    Design & Developed by{' '}
    <a
      target="_blank"
      className="hover:underline"
      href="https://fuzzycloud.in/"
      rel="noreferrer"
    >
      Fuzzy Cloud
    </a>{' '}
    &copy;{year}. All Rights Reserved.
  </footer>
  )
}
