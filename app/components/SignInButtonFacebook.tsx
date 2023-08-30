"use client";
import { signIn } from "next-auth/react";
import { BsFacebook } from "react-icons/bs";

// É necessário informar que o componente é um componente cliente, pois ele não é um componente server-side.

function SignInButtonFacebook() {


  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer shadow-md"
      onClick={() => signIn("facebook")}
    >
      <div>
        <BsFacebook size={24} />
      </div>
      <div>Continuar com Facebook</div>
    </button>
  );
}

export default SignInButtonFacebook;
