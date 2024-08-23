"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    const [dropdown, setDropdown] = useState(false);
    return (
        <nav className="bg-blue-950 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-white md:order-1 flex items-center">
                    <span><img src="/coffee.gif" alt="coffee" width={50} /></span><span>getMea</span><span className='text-blue-500 font-bold'>COFFEE</span><span>!</span>
                </div>
                {/* <div className="text-white order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between">

                        <li className="md:px-4 md:py-2 hover:text-blue-500 "><a href="#">Dashboard</Link></li>
                        <li className="md:px-4 md:py-2 hover:text-blue-500"><a href="#">Search</Link></li>
                        <li className="md:px-4 md:py-2 hover:text-blue-500"><a href="#">Explore</Link></li>
                        <li className="md:px-4 md:py-2 hover:text-blue-500"><a href="#">About</Link></li>
                        <li className="md:px-4 md:py-2 hover:text-blue-500"><a href="#">Contact</Link></li>
                    </ul>
                </div> */}
                <div className="order-2 md:order-3 flex gap-5 relative">

                    {session && <><button onClick={() => setDropdown(!dropdown)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.name.split(" ")[0].toUpperCase()} {dropdown ? <svg className="w-2.5 h-2.5 ms-3 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg> : <svg className="w-2.5 h-2.5 ms-3 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path strokeWidth="3" fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>}
                    </button>
                        <div id="dropdown" className={`absolute z-10 ${dropdown ? "" : "hidden"} bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-12`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>{signOut()}}>Sign out</Link>
                                </li>
                            </ul>
                        </div></>}

                    {!session && <Link href={"/login"}>
                        <button className="px-4 py-2 bg-white hover:bg-gray-200 text-gray-800 rounded-xl flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span>Login</span>
                        </button>
                    </Link>}


                </div>
            </div>
        </nav>
    )
}

export default Navbar
