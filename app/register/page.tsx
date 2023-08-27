import RegisterForm from "../components/RegisterForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

// Página de registro que renderiza um componente, o componente RegisterForm.
export default async function RegisterPage() {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  }

  return <RegisterForm />;
}
