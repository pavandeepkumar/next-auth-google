"use client"
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Logout = () => {
    const router=useRouter()

    const handeLogout =async()=>{
    
    
        await signOut()

     await router.push('/')

    }
  return (
    <div>
         <button className="bg-white rounded-full border border-gray-200 text-gray-800 px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
               
                <span onClick={handeLogout}>Logout</span>
            </button>
    </div>
  )
}

export default Logout