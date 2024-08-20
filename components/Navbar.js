"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
   
    return (
        <nav class="bg-blue-950 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div class="text-white md:order-1 flex items-center">
                   <span><img src="/coffee.gif" alt="coffee" width={50} /></span><span>getMea</span><span className='text-blue-500 font-bold'>COFFEE</span><span>!</span>
                </div>
                {/* <div class="text-white order-3 w-full md:w-auto md:order-2">
                    <ul class="flex font-semibold justify-between">

                        <li class="md:px-4 md:py-2 hover:text-blue-500 "><a href="#">Dashboard</a></li>
                        <li class="md:px-4 md:py-2 hover:text-blue-500"><a href="#">Search</a></li>
                        <li class="md:px-4 md:py-2 hover:text-blue-500"><a href="#">Explore</a></li>
                        <li class="md:px-4 md:py-2 hover:text-blue-500"><a href="#">About</a></li>
                        <li class="md:px-4 md:py-2 hover:text-blue-500"><a href="#">Contact</a></li>
                    </ul>
                </div> */}
                <div class="order-2 md:order-3">
                    <Link href={"/login"}>
                    <button class="px-4 py-2 bg-white hover:bg-gray-200 text-gray-800 rounded-xl flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Login</span>
                    </button>
                    </Link>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
