"use client";
// O Link é importado do next/link, que por sua vez serve como um referenciador para outros componentes. Se comporta como o antigo useNavigate(), mas com mais funcionalidades.
import Link from "next/link";
import { useState } from "react";

function LoginForm() {
  const [error, setError] = useState("");

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-500">
        <h1 className="text-xl font-bold my-4">Página de login</h1>

        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
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
