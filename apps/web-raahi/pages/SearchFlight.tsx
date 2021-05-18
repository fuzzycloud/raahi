import { url } from 'node:inspector';
import React from 'react';
import Nav from '../component/nav';
import { useRouter } from 'next/router';

export function SearchFlight() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./SearchFlight.css file.
   */
  const router = useRouter();
  return (
    <div>
      <section id="hero-area" className=" pt-48 pb-10 ">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2
                className="text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp text-center"
                data-wow-delay="1s"
              >
                SEARCH ALL TRAVELS DEALS IN ONE GO
                {/* <br className="hidden lg:block" />  */}
              </h2>
              <div className="grid justify-items-stretch ">
  
  <div className="justify-self-center ">
  <div className="shadow overflow-hidden sm:rounded-md  w-full bg-white p-50">
                  <div className="px-4 py-5  sm:p-6 ">
                    <div className="flex items-center mt-5 space-x-6">
                      <button className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        One Way
                      </button>
                      <button className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize bg-gray-600 rounded-full hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                        Round Trip
                      </button>
                    </div>

                    <div className="grid grid-cols-24 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                    <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Choose Starting Point
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
                      <div className="col-span-12 sm:col-span-12">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Choose Starting Point
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Choose Starting Point
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                    
                  </div>
                </div>
  </div>
  
</div>
                {/* <div className="shadow overflow-hidden sm:rounded-md place-items-center ">
                  <div className="px-4 py-5 bg-white sm:p-6 ">
                    <div className="flex items-center mt-5 space-x-6">
                      <button className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        One Way
                      </button>
                      <button className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize bg-gray-600 rounded-full hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                        Round Trip
                      </button>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country / Region
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div> */}
               
              </div>
            
            </div>
          </div>
       
      </section>


    
   </div>
  );
}

export default SearchFlight;
