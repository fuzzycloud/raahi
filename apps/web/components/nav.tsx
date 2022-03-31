
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Nav() {
  const router = useRouter();
  return (
    <div>
      <div className="navbar bg-green-500 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" text-white lg:hidden">
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-500 opacity-50 rounded-box w-52"
            >
              <li
                className={
                  router.pathname === '/'
                    ? 'active bg-green-600 rounded font-bold text-xl text-white'
                    : 'font-bold text-xl text-white'
                }
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={
                  router.pathname === '/SearchHotel'
                    ? 'active bg-green-600 rounded font-bold text-xl text-white'
                    : 'font-bold text-xl text-white'
                }
              >
                <Link href="/SearchHotel">Hotels</Link>
              </li>
              <li
                className={
                  router.pathname === '/SearchFlight'
                    ? 'active bg-green-600 rounded font-bold text-xl text-white'
                    : 'font-bold text-xl text-white'
                }
              >
                <Link href="/SearchFlight">Flight</Link>
              </li>

              <li
                className={
                  router.pathname === '/about'
                    ? 'active bg-green-600 rounded font-bold text-xl text-white'
                    : 'font-bold text-xl text-white'
                }
              >
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="font-mono normal-case text-3xl font-bold text-center md:text-4xl text-white pl-4 ">
            Raahi
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-2">
            <li
              className={
                router.pathname === '/'
                  ? 'active bg-green-600 rounded font-bold text-xl text-white'
                  : 'font-bold text-xl text-white'
              }
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.pathname === '/SearchHotel'
                  ? 'active bg-green-600 rounded font-bold text-xl text-white'
                  : 'font-bold text-xl text-white'
              }
            >
              <Link href="/SearchHotel">Hotels</Link>
            </li>
            <li
              className={
                router.pathname === '/SearchFlight'
                  ? 'active bg-green-600 rounded font-bold text-xl text-white'
                  : 'font-bold text-xl text-white'
              }
            >
              <Link href="/SearchFlight">Flight</Link>
            </li>
            <li
              className={
                router.pathname === '/Offers'
                  ? 'active bg-green-600 rounded font-bold text-xl text-white'
                  : 'font-bold text-xl text-white'
              }
            >
              <Link href="/Offers">Offers</Link>
            </li>
            <li
              className={
                router.pathname === '/about'
                  ? 'active bg-green-600 rounded font-bold text-xl text-white'
                  : 'font-bold text-xl text-white'
              }
            >
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
    <a className="btn">Get started</a>
  </div> */}
      </div>
    </div>
  );
}
