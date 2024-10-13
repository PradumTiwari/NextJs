import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        username:"Pradum",
        email:"Saten@gmail.com"
    })
}