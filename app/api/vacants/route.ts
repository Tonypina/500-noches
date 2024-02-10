import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../lib/prisma"

export const dynamic = 'force-dynamic' // defaults to auto

async function streamToString(stream: any) {
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }

    return Buffer.concat(chunks).toString('utf8');
}

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