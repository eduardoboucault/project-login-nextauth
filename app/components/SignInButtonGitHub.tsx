"use client";
import { signIn } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { useSession } from "next-auth/react";

function SignInButtonGitHub() {
  const { data: session } = useSession();

  const buttonText = session ? "Continuar com GitHub" : "Logar com GitHub";

  return (
    <button
      type="button"
      className="flex items-center justify-center bg-black text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-gray-700 hover:text-white shadow-md"
      onClick={() => signIn("github")}
    >
      <div className="mr-2">
        <BsGithub size={22} />
      </div>
      <div>{buttonText}</div>
    </button>
  );
}

export default SignInButtonGitHub;
