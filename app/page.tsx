import LoginForm from "./components/LoginForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";

// Página de login que renderiza um componente, o componente LoginForm.
export default async function Home() {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main>
      <LoginForm />
      <div className="flex justify-center items-center gap-2">
      <PrivacyPolicy/>
      <CookiePolicy/>
      </div>
    </main>
  );
}
