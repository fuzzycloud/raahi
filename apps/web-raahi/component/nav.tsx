import React from 'react';
import { useRouter } from 'next/router';

export default function Nav() {
  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }
  const router = useRouter();
  return (
    <header id="header-wrap" className="relative">
      <nav className="bg-green-500 fixed top-0 left-0 w-full z-30 duration-300">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}

              <button
                type="button"
                className="block lg:hidden"
                onClick={handleClick}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {isOpen && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!isOpen && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/> */}
                <h1 className="font-bold font-mono text-3xl tracking-widest text-black">
                  . RAAHI .
                </h1>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-black", Default: "text-gray-300 hover:bg-gray-700 hover:text-black" --> */}
                  <a
                    onClick={() => {
                      router.push('/');
                    }}
                    className="page-scroll active bg-green-300 text-black px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                   HOME
                  </a>
                  <a
                href="#"
                className=" page-scroll text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                HOTELS
              </a>

                  <a
                    href="#flights"
                    className="page-scroll text-black hover:bg-green-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    FLIGHTS
                  </a>

                  {/* <a
                    href="#portfolio"
                    className="text-black hover:bg-green-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Portfolio
                  </a> */}

                  <a
                    href="#price"
                    className="text-black hover:bg-green-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    PRESS
                  </a>

                  <a
                    href="#footer"
                    className="text-black hover:bg-green-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                   ABOUT
                  </a>

                  <a
                    href="#footer"
                    className="text-black hover:bg-green-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                   PRIVACY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* <!-- Current: "bg-gray-900 text-black", Default: "text-gray-300 hover:bg-gray-700 hover:text-black" --> */}
            <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} `}>
            
              <a
                onClick={() => {
                  router.push('/');
                }}
                className="bg-green-300 text-black block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
               HOME
              </a>
              <a
                href="#FLIGHTS"
                className="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
               HOTELS
              </a>

              <a
                href="#FLIGHTS"
                className="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                FLIGHTS
              </a>

              {/* <a
                href="#portfolio"
                className="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Portfolio
              </a>
 */}
              <a
                href="#price"
                className="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
               PRESS
              </a>

              <a
                href="#footer"
                className="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
               ABOUT
              </a>

              <a
                href="#footer"
                className="text-black hover:bg-green-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                PRIVACY
              </a>
            </div>{' '}
          </div>
        </div>
      </nav>
    </header>
  );
}
