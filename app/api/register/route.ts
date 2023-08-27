import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../lib/mongodb";
import User from "../../models/user";
import bcrypt from "bcryptjs";
export async function POST(req: NextRequest) {

    try {
        // Receber o input
        const { name, email, password } = await req.json();
        // Hashear a senha
        const hashedPassword = await bcrypt.hash(password, 10);
        // Conexão database
        await connectMongoDB();
        // Criar o usuário
        await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User registered" }, { status: 201 });

    } catch (error) {

        return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 });
    }
}