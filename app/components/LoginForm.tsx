"use client";
// O Link é importado do next/link, que por sua vez serve como um referenciador para outros componentes. Se comporta como o antigo useNavigate(), mas com mais funcionalidades.
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SignInButtonFacebook from "./SignInButtonFacebook";
import SignInButtonGitHub from "./SignInButtonGitHub";
import SignInButtonGoogle from "./SignInButtonGoogle";

function LoginForm() {
  // Utilizar states para controlar os inputs. Assim quando input receber um valor, o state vai ser atualizado para o novo valor.

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Verificação para se os inputs estiverem vazios
    if (!email || !password) {
      setError("Preencha todos os campos!");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Usuário ou senha inválidos!");
        return;
      }
      // BIZARRO! Navegação de página usando o router do useRouter com método de array com o argumento do nome da página.
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-500">
        <h1 className="text-xl font-bold mb-4 text-center">Página de login</h1>

        <div className="flex flex-col gap-4">
          <SignInButtonFacebook />
          <SignInButtonGitHub />
          <SignInButtonGoogle />
        </div>

        <span className="grid place-items-center text-sm mt-5 text-gray-500 mt-2 mb-4">
          Ou
          <hr className="w-full mt-2" />
        </span>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Entrar
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href="/register">
            Não tem uma conta? <span className="underline">Registre-se</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
