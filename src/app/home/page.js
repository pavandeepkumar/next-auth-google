
import React from 'react'
import { authConfig, loginIsRequiredServer } from "../../lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import Logout from '@/component/Logout';
import Image from 'next/image';

const page = async () => {

    const session = await getServerSession(authConfig);
    console.log("session: ", session?.user?.email)
    return (
        <div>
        <h1>{session?.user?.name}</h1>
            {session?.user?.image && <img src={session?.user?.image} alt="img" width={100} height={100} />}
            <h3>Email: {session?.user?.email}</h3>
            <Logout />

        </div>
    )
}

export default page