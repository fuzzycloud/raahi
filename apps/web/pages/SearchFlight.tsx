import { url } from 'node:inspector';
import React, { useState } from 'react';
import Nav from '../component/nav';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export function SearchFlight() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./SearchFlight.css file.
   */
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <section className=" pt-20 pb-10 content_bg">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <div className="flex justify-center py-4">
                {/* <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor-fill" viewBox="0 0 16 16">
  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
</svg>
      </div> */}
              </div>

              <div className="flex justify-center">
                <div className="flex">
                  <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
                    Search Flights
                  </h1>
                </div>
              </div>
              <div className="grid justify-items-stretch ">
                <div className="justify-self-center ">
                  <div className="shadow overflow-hidden sm:rounded-md  w-full bg-white ">
                    <div className="px-4 py-5  sm:p-6 ">
                      <div className=" pt-3 pb-2 space-x-6">
                        <label>
                          <input
                            type="radio"
                            name="radio"
                            value="1"
                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                          />
                          One Way
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="radio"
                            value="2"
                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                          />
                          Round Trip
                        </label>
                      </div>
                      {/* <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6"> */}
                      <div className="grid grid-cols-10 gap-6 mt-7">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Journey Date
                          </label>
                          <DatePicker
                            className=" border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Return Date
                          </label>
                          <DatePicker
                            className=" border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                      {/* </div>
                </div> */}

                      <div className="col-span-12 sm:col-span-12">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mt-7"
                        >
                          Choose Starting Point
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-12 sm:col-span-12">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mt-7"
                        >
                          Choose Destination Point
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                      <div className="col-span-12 sm:col-span-12">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mt-7"
                        >
                          Choose Passengers
                        </label>

                        <div className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                          <div className="flex space-x-4 ...">
                            <div>
                              <h5>Adult (above 12 years)</h5>
                            </div>

                            <div>
                              <button
                                className="border px-2 py-1 border-gray-300 bg-white rounded-md shadow-sm"
                                onClick={handleDecrement}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-dash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                              </button>
                            </div>
                            <div> {count}</div>
                            <div>
                              {' '}
                              <button
                                className="border px-2 py-1 border-gray-300 bg-white rounded-md shadow-sm"
                                onClick={handleIncrement}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                          <div className="flex space-x-4 ...">
                            <div>
                              <h5>Children ( 2-12 years )</h5>
                            </div>

                            <div>
                              <button
                                className="border px-2 py-1 border-gray-300 bg-white rounded-md shadow-sm"
                                onClick={handleDecrement}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-dash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                              </button>
                            </div>
                            <div> {count}</div>
                            <div>
                              {' '}
                              <button
                                className="border px-2 py-1 border-gray-300 bg-white rounded-md shadow-sm"
                                onClick={handleIncrement}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                          <div className="flex space-x-4 ...">
                            <div>
                              <h5>Infants (below 2 years)</h5>
                            </div>

                            <div>
                              <button
                                className="border px-2 py-1 border-gray-300 bg-white rounded-md shadow-sm"
                                onClick={handleDecrement}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-dash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                              </button>
                            </div>
                            <div> {count}</div>
                            <div>
                              {' '}
                              <button
                                className="border px-2 py-1 border-gray-300 bg-white rounded-md shadow-sm"
                                onClick={handleIncrement}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => router.replace('/Flights')}
                          className=" mt-10 bg-green-500 hover:bg-green-500 text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchFlight;
