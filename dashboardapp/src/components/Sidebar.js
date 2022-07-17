import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import { FaUser } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";


export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>

            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />

            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="https://material-tailwind.com?ref=mtd"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <H6 color="gray">Golden Hotel</H6>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />
                        <ul className="flex-col min-w-full mr-2 flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/dashboard"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <MdDashboard />
                                    <p className='font-semibold'>Dashboard</p>
                                </NavLink>
                            </li>

                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/tables"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <BsFillPeopleFill />
                                    <p className='font-semibold'>User</p>
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/tablestamu"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FaUser />
                                    <p className='font-semibold'>Tamu</p>
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/tableskamar"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FaBed />
                                    <p className='font-semibold'>Kamar</p>
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/settings"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FiSettings />
                                    <p className='font-semibold'>Settings</p>
                                </NavLink>
                            </li>
                        </ul>


                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">

                            <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                                <a

                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-4 text-sm font-light py-3"
                                >
                                    <button>
                                        Logout
                                    </button>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
