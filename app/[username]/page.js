"use client"
import React from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const profile = ({ params }) => {
  const { data: session } = useSession()
  if (!session) {
    const router = useRouter()
    router.push("/login")
  }
  return (
    <>
      <div className='text-white w-full relative flex flex-col items-center'>
        <img className='object-cover w-full' src="/banner.jpg" alt="cover" />
        <div className="w-[120px] h-[120px] absolute left-[46%] bottom-[-15%] shadow-md shadow-gray-500 rounded-lg flex flex-col items-center gap-4">
          <img className='object-cover rounded-lg ' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5583849/e529501f38c9495d89c3dbb3d1c7acc2/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/13.jpg?token-time=1725753600&token-hash=7pxvs_SzqEt8odygYgbqe-gi4l6MsNJAh_Mo-vcIrnE%3D" alt="profile" />
          <div className="details flex flex-col items-center">
            <h2 className='font-bold text-lg'>Samir Nepal</h2>
            <p className='font-light text-gray-400'>@{params.username}</p>
          </div>
        </div>
      </div>
      <div className='mt-[8rem] text-white flex flex-col items-center gap-5'>
        <div className='flex text-[12px] text-gray-300 font-light'>
          154 members • 277 posts • $70.05/month
        </div>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 mb-2">Join for free</button>
      </div>


      <div className="payment flex gap-10 my-10">
        <div className="supporters h-[37vh] border-[1px] border-white rounded-md w-[40vw] text-white flex flex-col justify-start p-8 gap-4">
          <h2 className='font-bold text-[20px]'>Supporters👏</h2>
          <ul className='h-[75%] overflow-y-auto flex flex-col gap-2 text-yellow-400'>
            <li className='flex gap-3 items-center'><svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD43B" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg> Samir donated <span className='font-bold'>$50</span></li>
            <li className='flex gap-3 items-center'><svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD43B" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg> Samir donated <span className='font-bold'>$50</span></li>
            <li className='flex gap-3 items-center'><svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD43B" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg> Samir donated <span className='font-bold'>$50</span></li>
            <li className='flex gap-3 items-center'><svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD43B" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg> Samir donated <span className='font-bold'>$50</span></li>
            <li className='flex gap-3 items-center'><svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD43B" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg> Samir donated <span className='font-bold'>$50</span></li>
            <li className='flex gap-3 items-center'><svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD43B" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg> Samir donated <span className='font-bold'>$50</span></li>
            <li className='flex gap-3 items-center'><svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD43B" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg> Samir donated <span className='font-bold'>$50</span></li>
            <li className='flex gap-3 items-center'><svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD43B" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg> Samir donated <span className='font-bold'>$50</span></li>



          </ul>
        </div>
        <div className="pay h-[37vh] w-[50vw] border-[1px] border-white text-white rounded-md p-7 flex flex-col gap-5">
          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-xl'>Make a payment<span className='text-2xl'>💸</span></h2>
            <div className="paymentcomp flex gap-1">
              <div className="input-fields flex gap-2">
                <input className='bg-slate-600 rounded-sm py-1 px-2 w-[30%]' type="text" placeholder='Name' />
                <input className='bg-slate-600 rounded-sm py-1 px-2 w-[45%]' type="text" placeholder='Message' />
                <input className='bg-slate-600 rounded-sm py-1 px-2 w-[20%]' type="number" placeholder='Amount' />
              </div>
              <button className='bg-blue-600 py-2 px-5 rounded-md cursor-pointer hover:bg-blue-700'>Pay</button>
            </div>

          </div>

          <div className="fastpay flex gap-3">
            <button className='bg-blue-600 py-2 px-5 rounded-md cursor-pointer hover:bg-blue-700'>Pay $5</button>
            <button className='bg-blue-600 py-2 px-5 rounded-md cursor-pointer hover:bg-blue-700'>Pay $10</button>
            <button className='bg-blue-600 py-2 px-5 rounded-md cursor-pointer hover:bg-blue-700'>Pay $20</button>
          </div>

        </div>
      </div>
    </>

  )
}

export default profile
