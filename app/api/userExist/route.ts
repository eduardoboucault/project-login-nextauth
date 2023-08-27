import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../lib/mongodb";
import User from "@/app/models/user";

export async function POST(req: NextRequest) {
    try {
        // Conectar com o banco de dados
        await connectMongoDB();
        // Esperar o email chegar do input do formulário.
        // Desestruturar o input.
        const { email } = await req.json();
        // Buscar o usuário, parecido com o knex é aqui que fazemos a busca "sql" no banco de dados
        const user = await User.findOne({ email }).select("id");
        console.log('user:', user);
        // Caso encontre um usuário, retornar o usuário
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
    }
}