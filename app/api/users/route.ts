import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../lib/prisma"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(req: Request) {

    const newUser = await req.json()
    
    var bcrypt = require('bcryptjs')
    
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser?.password, salt, async function(err, hash) {
            const newPrismaUser = await prisma.user.create({
                data: {
                  name: newUser.name,
                  email: newUser.email,
                  password: hash,
                }
            }).then().catch(e => console.log(e))
        })
    })
    
    return NextResponse.json({message: "Funciona"});

}

export async function GET() {
    const allPrismaUsers = await prisma.user.findMany()

    return NextResponse.json({
        users: allPrismaUsers
    })
}