'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

function SignInButtonGoogle() {
  return (
    <button type="button" className="bg-white hover:bg-white text-black-500 hover:text-gray-500 font-bold py-2 px-4 rounded cursor-pointer shadow-md" onClick={() => signIn('google')}>Logar com Google</button>
  )
}

export default SignInButtonGoogle