import schema from "@/app/api/auth/register/schema";
import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import bcrypt from "bcrypt";


export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json({error: validation.error.errors}, {status: 400});
    }

    const user = await prisma.user.findUnique({
        where: {email: body.email}
    });

    if (user) {
        return NextResponse.json({message: 'User already exists'});
    }

    const hashedPassword =  await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword
        }
    });

    return NextResponse.json({email: newUser.email}, {status: 201});

}