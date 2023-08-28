"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Loading from "./Loading";

function UserInfo() {
  const { data: session } = useSession();

  function getRandomImageURL() {
    const width = 100;
    const height = 100;
    return `https://picsum.photos/${width}/${height}`;
  }

  return (
    <div className="grid place-items-center h-screen">
      {session ? (
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
          <span className="font-bold text-2xl mb-2">
            Informações do usuário:
          </span>
          <div className="flex flex-col items-center gap-2">
            <Image
              className="rounded-full object-cover w-[100px] h-[100px]"
              src={session?.user?.image || getRandomImageURL()}
              alt="Imagem do usuário"
              width={100}
              height={100}
            />
            <div>
              <b>Nome:</b> <span>{session?.user?.name}</span>
            </div>
            <div>
              <b>Email:</b> <span>{session?.user?.email}</span>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default UserInfo;
