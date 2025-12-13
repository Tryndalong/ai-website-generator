"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { User } from 'lucide-react';
import { UserDetailContext } from '@/context/UserDetailContext';
import { set } from 'date-fns';

function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [userDetail, setUserDetail] = React.useState<any>(null);
    const { user } = useUser();
    useEffect(() => {
        user && CreateNewUser();
    }, [user])

    const CreateNewUser = async () => {
        const result = await axios.post('/api/users', {
        })
        console.log(result.data);
        setUserDetail(result.data?.user);
    }

    return (
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
            <div>{children}</div>
        </UserDetailContext.Provider>
    )
}

export default Provider