import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import schema from "@/app/api/users/schema";

export async function GET(request: NextRequest, {params}: { params: { id: string } }) {

    const user = await prisma.user.findUnique({where: {id: parseInt(params.id)}})

    console.log(user);

    return NextResponse.json(user);
}

export async function PUT(
    request: NextRequest,
    {params}: { params: { id: string } }
) {
    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success)
        return NextResponse.json({error: validation.error.errors}, {status: 400});

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(params.id)
        }
    });


    if (!user)
        return NextResponse.json({error: 'User not found'}, {status: 404});


    const emailExists = await prisma.user.findUnique({where: {email: body.email}});

    if (emailExists)
        return NextResponse.json({error: 'Email already exists'});

    const updatedUser = await prisma.user.update({
        where: {
            id: parseInt(params.id)
        },
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(updatedUser);
}

export async function DELETE(
    request: NextRequest,
    {params}: { params: { id: string } }
) {
    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success)
        return NextResponse.json({error: validation.error.errors}, {status: 400});

    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    });

    if (!user)
        return NextResponse.json({error: 'User does not exist'},{status: 404});

    const deletedUser = await prisma.user.delete({where: {id: parseInt(params.id)}});

    return NextResponse.json(deletedUser);

}