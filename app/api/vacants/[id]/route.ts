import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../lib/prisma"

export async function GET( req: Request, {params} ) {
    const id = parseInt(params.id, 10)

    const uniquePrismaVacant = await prisma.vacant.findUnique({
        where: {
            id: id
        }
    })

    if (!uniquePrismaVacant) {
        return null
    }

    return NextResponse.json({
        vacant: uniquePrismaVacant,
        status: 200
    })
}

export async function DELETE( req: Request, {params} ) {
    
    const id = parseInt(params.id, 10)

    const deletedPrismaVacant = await prisma.vacant.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({status: 200})
}

export async function PUT( req: Request, {params} ) {
    const id = parseInt(params.id, 10)
    const updatedVacant = await req.json()

    const updatedPrismaVacant = await prisma.vacant.update({
        where: {
            id: id
        },
        data: updatedVacant
    })

    return NextResponse.json({
        status: 202
    })
}