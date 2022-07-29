import { Link } from "react-router-dom";
import React from "react";


function NotFound404() {

  return <div>
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-800">
      <h1 className="text-9xl font-extrabold text-yellow-500 tracking-widest">404</h1>
      <br />
      <br />
      <div className="text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5 hover:bg-yellow-500 bg-yellow-400">
        <a className="relative inline-block hover:bg-yellow-500  text-sm font-medium text-[#000000] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="relative block px-8 bg-white py-3 border border-current">
            <a href="/" className="hover:bg-yellow-500">
              <button>Go Home</button>
            </a>
          </span>
        </a>
      </button>
    </main>

  </div>;
}

export default NotFound404;
