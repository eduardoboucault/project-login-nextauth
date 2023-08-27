import LoginForm from "./components/LoginForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";

// Página de login que renderiza um componente, o componente LoginForm.
export default async function Home() {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
}
