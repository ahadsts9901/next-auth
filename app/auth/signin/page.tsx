"use client"

import { signIn } from 'next-auth/react'
import React from 'react'

const Signin = () => {
    return (
        <>
            <p>Signin</p>
            <p className='m-4 rounded-full p-2 border shadow-sm w-fit cursor-pointer'
                onClick={
                    async () => await signIn('google', {
                        callbackUrl: '/',
                        redirect: true,

                    })}
            >google</p>
        </>
    )
}

export default Signin