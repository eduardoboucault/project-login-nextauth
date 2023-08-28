import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/app/lib/mongodb";
import UserFacebook from "@/app/models/userFacebook";

export async function POST(req: NextRequest) {
    await connectMongoDB();
    const { name, email } = await req.json();
    await UserFacebook.create({ name, email });
    return NextResponse.json({ message: "User registered" }, { status: 201 });
}