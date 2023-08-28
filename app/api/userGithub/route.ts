import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../lib/mongodb";
import UserGithub from "@/app/models/userGithub";

export async function POST(req: NextRequest) {
    await connectMongoDB();
    const { name, email } = await req.json();
    await UserGithub.create({ name, email });
    return NextResponse.json({ message: "User registered" }, { status: 201 });
}