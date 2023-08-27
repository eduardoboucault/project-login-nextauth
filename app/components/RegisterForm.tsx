"use client";
// O Link é importado do next/link, que por sua vez serve como um referenciador para outros componentes. Se comporta como o antigo useNavigate(), mas com mais funcionalidades.
import Link from "next/link";
import { useState } from "react";

function RegisterForm() {
  // Utilizar states para controlar os inputs. Assim quando input receber um valor, o state vai ser atualizado para o novo valor.

  // state de name para controlar os valores inputados para o nome
  const [name, setName] = useState("");
  // state de email para controlar os valores inputados para o email
  const [email, setEmail] = useState("");
  // state de password para controlar os valores inputados para a senha
  const [password, setPassword] = useState("");
  // state de error para controlar os erros
  const [error, setError] = useState("");

  // Função para enviar os dados para o back-end, utilizamos o e.preventDefault() para previnir o comportamento padrao do submit que é dar reaload na página.
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Preencha todos os campos!");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("Registro de usuário falhou.");
      }
    } catch (error) {
      console.log("Erro durante o registro.", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-500">
        <h1 className="text-xl font-bold my-4">Página de cadastro</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome completo"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Registrar-se
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              Error message
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href="/">
            Já possui uma conta? <span className="underline">Logar</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
