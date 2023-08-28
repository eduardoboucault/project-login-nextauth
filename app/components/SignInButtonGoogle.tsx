"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useSession } from "next-auth/react";

function SignInButtonGoogle() {
  const { data: session } = useSession();

  const buttonText = session ? "Continuar com Google" : "Logar com Google";

  return (
    <button
      type="button"
      className="flex items-center justify-center bg-white hover:bg-white text-black-500 hover:text-gray-500 font-bold py-2 px-4 rounded cursor-pointer shadow-md"
      onClick={() => signIn("google")}
    >
      <div className="mr-2">
        <FcGoogle size={24} />
      </div>
      <div>{buttonText}</div>
    </button>
  );
}

export default SignInButtonGoogle;
