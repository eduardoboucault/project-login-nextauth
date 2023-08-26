"use client";

// O AuthProvider é um componente que envolve a autenticação Server-side para torná-la utilizável em componentes Client-side. Ele utiliza o SessionProvider do next-auth/react para gerenciar o estado da sessão. Isso é essencial para lidar com a autenticação em aplicações Next.js.

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
