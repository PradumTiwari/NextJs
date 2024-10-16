import { NextResponse } from "next/server";

export async function Get(){
    return NextResponse.json({
        username:'Pradum',
        email:'satendarpradum@gmail.com'
    })
}