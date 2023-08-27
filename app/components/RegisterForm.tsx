"use client";
// O Link é importado do next/link, que por sua vez serve como um referenciador para outros componentes. Se comporta como o antigo useNavigate(), mas com mais funcionalidades.
import Link from "next/link";
import { useState } from "react";
// Método de navegação utilizado para navegar entre páginas é o useRouter proveniente do next/navigation.
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  // Função para enviar os dados para o back-end, utilizamos o e.preventDefault() para previnir o comportamento padrao do submit que é dar reaload na página.
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Verificação para se os inputs estiverem vazios
    if (!name || !email || !password) {
      setError("Preencha todos os campos!");
      return;
    }

    try {
      // Validar se o email já existe, se existir, retornar um erro.
      const resUserExist = await fetch("/api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // O que eu envio para verificar no registro é o email.
        body: JSON.stringify({ email }),
      });
      // Desestruturar o retorno da requisição userExist.
      const { user } = await resUserExist.json();
      // Verificação do usuário já cadastrado
      if (user) {
        setError("Usuário já cadastrado!");
        return;
      }

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
        // BIZARRO! Navegação de página usando o router do useRouter com método de array com o argumento do nome da página.
        router.push("/");
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
              {error}
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
