// import React from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// export default function Nav() {
//   const [isOpen, setisOpen] = React.useState(false);

//   function handleClick() {
//     setisOpen(!isOpen);
//   }
//   const router = useRouter();
//   return (
//     <header id="header-wrap" classNameNameName="relative ">
//       <nav classNameNameName="fixed top-0 flex items-center  w-full z-30 duration-300 ">
//         <div classNameNameName="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//           <div classNameNameName="relative flex items-center justify-between h-16">
//             <div classNameNameName="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               {/* <!-- Mobile menu button--> */}

//               <button
//                 type="button"
//                 classNameNameName="block lg:hidden"
//                 onClick={handleClick}
//               >
//                 <svg
//                   classNameNameName="h-6 w-6 fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   {isOpen && (
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
//                     />
//                   )}
//                   {!isOpen && (
//                     <path
//                       fillRule="evenodd"
//                       d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//             <div classNameNameName="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//               {/* <div classNameNameName="flex-shrink-0 flex items-center">

//                 <h1 classNameNameName="font-bold font-mono text-3xl tracking-widest text-black">
//                   . RAAHI .
//                 </h1>
//               </div> */}
//               <div classNameNameName="flex items-center">
//               {/* hidden sm:block sm:ml-6 */}
//                 <div classNameNameName="flex space-x-4">
//                   {/* <!-- Current: "bg-gray-900 text-black", Default: "text-gray-300 hover:bg-gray-700 hover:text-black" --> */}
//                   <a
//                     onClick={() => {
//                       router.push('/');
//                     }}
//                     classNameNameName="  bg-green-300 text-black px-3 py-2 rounded-md text-sm font-medium"
//                     aria-current="page"
//                   >
//                     HOME
//                   </a>
//                   <a
//                     onClick={() => {
//                       router.push('/SearchHotel');
//                     }}
//                     classNameNameName="  text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     HOTELS
//                   </a>

//                   <a
//                     onClick={() => {
//                       router.push('/SearchFlight');
//                     }}
//                     classNameNameName=" text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     FLIGHTS
//                   </a>

//                   {/* <a
//                     href="#portfolio"
//                     classNameNameName="text-black hover:bg-green-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Portfolio
//                   </a> */}

//                   {/* <a
//                    onClick={() => {
//                     router.push('/press');
//                   }}
                    
//                     classNameNameName="text-black hover:bg-green-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     PRESS
//                   </a> */}

//                   <a
//                     onClick={() => {
//                       router.push('/about');
//                     }}
//                     classNameNameName=" text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     ABOUT
//                   </a>

//                   {/* <a
//                     href="#footer"
//                     classNameNameName="text-black hover:bg-green-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                    PRIVACY
//                   </a> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Mobile menu, show/hide based on menu state. --> */}
//         <div classNameNameName="sm:hidden" id="mobile-menu">
//           <div classNameNameName="px-2 pt-2 pb-3 space-y-1">
//             {/* <!-- Current: "bg-gray-900 text-black", Default: "text-gray-300 hover:bg-gray-700 hover:text-black" --> */}
//             <div classNameNameName={`lg:flex ${isOpen ? 'block' : 'hidden'} `}>
//               <a
//                 onClick={() => {
//                   router.push('/');
//                 }}
//                 classNameNameName="bg-green-300 text-black block px-3 py-2 rounded-md text-base font-medium"
//                 aria-current="page"
//               >
//                 HOME
//               </a>
//               <a
                // onClick={() => {
                //   router.push('/HotelSearch');
                // }}
//                 classNameNameName="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 HOTELS
//               </a>

//               <a
//                 onClick={() => {
//                   router.push('/SearchFlight');
//                 }}
//                 classNameNameName="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 FLIGHTS
//               </a>

//               {/* <a
//                 href="#portfolio"
//                 classNameNameName="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Portfolio
//               </a>
//  */}
//               <a
//                 onClick={() => {
//                   router.push('/press');
//                 }}
//                 classNameNameName="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 PRESS
//               </a>

//               <a
//                 onClick={() => {
//                   router.push('/about');
//                 }}
//                 classNameNameName="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 ABOUT
//               </a>

//               <a
//                 href="#footer"
//                 classNameNameName="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 PRIVACY
//               </a>
//             </div>{' '}
//           </div>
//         </div>
//       </nav>
//     </header>

//   );
// }
import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
export default function Nav() {
  const router = useRouter();
  return(
  <div>
  <div className="navbar bg-green-500 shadow-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn  lg:hidden">
        <svg  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className='font-bold text-xl'>Home</a></li>
        <li><a  className='font-bold text-xl'>Hotels</a></li>
        <li><a  className='font-bold text-xl'>Flight</a></li>
      </ul>
    </div>
    <a className="font-mono normal-case text-4xl font-bold text-center text-white">Raahi</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-2">
      <li className={router.pathname == "/" ? "active bg-green-600 rounded font-bold text-xl text-white" : "font-bold text-xl text-white"}><Link  href="/">Home</Link></li>
      <li className={router.pathname == "/SearchHotel" ? "active bg-green-600 rounded font-bold text-xl text-white" : "font-bold text-xl text-white"}><Link  href="/SearchHotel">Hotels</Link></li>
      <li className={router.pathname == "/SearchFlight" ? "active bg-green-600 rounded font-bold text-xl text-white" : "font-bold text-xl text-white"}><Link  href="/SearchFlight">Flight</Link></li>
     
      <li className={router.pathname == "/about" ? "active bg-green-600 rounded font-bold text-xl text-white" : "font-bold text-xl text-white"}><Link  href="/about">About</Link></li>
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Get started</a>
  </div> */}
</div>
  </div>
  )
}