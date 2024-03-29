import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"

function Navbari() {
  return (
    <div className='sticky top-0 opacity-80'>
      <nav className="bg-gray-800 fi border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 shadow-md sticky top-0 p-5 drop-shadow shadow-gray-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl  text-yellow-500 font-semibold whitespace-nowrap dark:text-yellow-500">Golden Hotel</span>
          </a>
          <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto gap-3" id="mobile-menu">
            <ul className="flex flex-col gap-x-px mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium px-4">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white rounded active:text-white md:bg-transparent hover:text-white md:text-yellow-500 md:p-0 dark:text-white active:" aria-current="page">Home</a>
              </li>
              {/* <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-yellow-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500">About</a>
              </li> */}
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-yellow-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500">
                  <AiOutlineShoppingCart className='text-yellow-500 hover:text-white font-bold text-lg mb-1' /></a>
              </li>
              <li>
                <a href="/login" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-yellow-500 dark:hover:bg-gray-500 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-500">Login</a>
              </li>
              <li>
                <a href="/register" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-yellow-500 dark:hover:bg-gray-500 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-500">Register</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbari