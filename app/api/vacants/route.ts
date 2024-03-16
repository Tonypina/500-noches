import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../lib/prisma"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(req: Request) {

    const newVacant = await req.json()
    
    const newPrismaVacant = await prisma.vacant.create({
        data: {
          position: newVacant.position,
          location: newVacant.location,
          restaurant: newVacant.restaurant,
          description: newVacant.description,
        }
    }).then().catch(e => console.log(e))
    
    return NextResponse.json({message: "Funciona"});

}

export async function GET() {
    const allPrismaVacants = await prisma.vacant.findMany()

    return NextResponse.json({
        vacants: allPrismaVacants
    })
}