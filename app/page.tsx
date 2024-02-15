import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from './api/auth/[...nextauth]/route'

const Home = async () => {
  const session = await getServerSession(authOptions)
  console.log("session", session);

  return (
    <>
      <div>home</div>
    </>
  )
}

export default Home