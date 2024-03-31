"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


export default function Component() {

  const { data: session }: any = useSession()
  console.log(session);

  if (session) {
    return (
      <div className="p-4 w-full h-screen flex flex-col justify-center items-center gap-8" >
        <h1 className="w-full text-center font-bold text-xl">Congrats Youre Signed In</h1>
        <div className="flex flex-col items-center gap-4">
          <img src={session.user.image} alt="image" 
          className="w-[6em] h-[6em] rounded-full object-cover"
          />
          <p className="w-full flex justify-center items-center gap-[0.4em] flex-wrap">Email: <p className="font-bold">{session.user.email}</p></p>
          <p className="w-full flex justify-center items-center gap-[0.4em] flex-wrap">Name: <p className="font-bold">{session.user.name}</p></p>
        </div>
        <button onClick={() => signOut()}
          className="w-fit px-4 py-2 text-white bg-black rounded-lg cursor-pointer"
        >Sign out</button>
      </div>
    )
  }
  return (
    <>
      <div className="p-4 w-full h-screen flex flex-col justify-center items-center gap-8" >
        <h1 className="w-full text-center font-bold text-xl">Not Signed In</h1>
        <div className="w-full flex justify-center items-center gap-4">
          <button className="m-4 cursor-pointer" onClick={() => signIn("github")}><FaGithub className="w-[1.5em] h-[1.5em]" /></button>
          <button className="m-4 cursor-pointer" onClick={() => signIn("google")}><FaGoogle className="w-[1.5em] h-[1.5em]" /></button>
          <button className="m-4 cursor-pointer" onClick={() => signIn("facebook")}><FaFacebook className="w-[1.5em] h-[1.5em]" /></button>
        </div>
      </div>
    </>
  )
}