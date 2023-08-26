'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

function SignInButtonGoogle() {
  return (
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => signIn('google')}>Logar com Google</button>
  )
}

export default SignInButtonGoogle