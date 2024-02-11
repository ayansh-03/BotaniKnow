import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const body = await req.json();

    const data = await prisma.plant.findUnique({
        where:{
            name:((body.name) as string).replaceAll("+"," ")
        }
    })

    console.log(data);


    return NextResponse.json(data)
}