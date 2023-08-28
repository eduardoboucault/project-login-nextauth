import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../lib/mongodb";
import UserGoogle from "../../models/userGoogle"

export async function POST(req: NextRequest) {
    await connectMongoDB();
    const { name, email } = await req.json();
    await UserGoogle.create({ name, email });
    return NextResponse.json({ message: "User registered" }, { status: 201 });
}