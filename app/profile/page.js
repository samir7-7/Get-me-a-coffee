"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const profile = () => {
    const { data: session } = useSession();
    console.log(session);
    if(!session){
        const router = useRouter()
       return router.push('/login')
    }
   
        return (
            <div className="text-white flex flex-col items-center mt-10 gap-2">
                <img src={session.user.image} alt="profile" width={150} className='rounded-full' />
                <p className='font-bold text-2xl text-gray-200'>{session.user.name}</p>
                <p className='font-light text-[14px] text-gray-400'>{session.user.email} </p>
            </div>
        )
    }

export default profile
