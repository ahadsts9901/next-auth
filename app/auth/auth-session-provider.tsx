"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'

const AuthSessionProvider = ({ children }: any) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthSessionProvider