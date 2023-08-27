'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

function SignInButtonGitHub() {
  return (
    <button type="button" className="bg-black text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-gray-700 hover:text-white" onClick={() => signIn('github')}>Logar com GitHub</button>
  )
}

export default SignInButtonGitHub