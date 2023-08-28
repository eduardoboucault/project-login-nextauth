"use client";
import { signIn } from "next-auth/react";
import { BsFacebook } from "react-icons/bs";
import { useSession } from "next-auth/react";

// É necessário informar que o componente é um componente cliente, pois ele não é um componente server-side.

function SignInButtonFacebook() {
  const { data: session } = useSession();

  const buttonText = session ? "Continuar com Facebook" : "Logar com Facebook";

  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer shadow-md"
      onClick={() => signIn("facebook")}
    >
      <div>
        <BsFacebook size={24} />
      </div>
      <div>{buttonText}</div>
    </button>
  );
}

export default SignInButtonFacebook;
