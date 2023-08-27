'use client'
import { signIn, signOut, useSession } from "next-auth/react"

// É necessário informar que o componente é um componente cliente, pois ele não é um componente server-side.

function SignInButtonFacebook() {
  return (
    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={() => signIn('facebook')}>Logar com Facebook</button>
  )
}

export default SignInButtonFacebook