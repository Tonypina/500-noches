import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../lib/prisma"

export async function GET( req: Request, {params} ) {
    const id = parseInt(params.id, 10)

    const uniquePrismaUser = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!uniquePrismaUser) {
        return null
    }

    return NextResponse.json({
        user: uniquePrismaUser,
        status: 200
    })
}

export async function DELETE( req: Request, {params} ) {
    
    const id = parseInt(params.id, 10)

    const deletedPrismaUser = await prisma.user.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({status: 200})
}

export async function PUT( req: Request, {params} ) {
    const id = parseInt(params.id, 10)
    const updatedUser = await req.json()

    var bcrypt = require('bcryptjs')
    
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(updatedUser?.password, salt, async function(err, hash) {
            const updatedPrismauser = await prisma.user.update({
                where: {
                    id: id
                },
                data: {
                    name: updatedUser.name,
                    email: updatedUser.email,
                    password: hash
                }
            })
        })
    })

    return NextResponse.json({
        status: 202
    })
}