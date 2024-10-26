import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default  function Get(req:NextApiRequest,res:NextApiResponse){
    return res.status(200).json({
        username:'Pradum',
        email:'satendarpradum@gmail.com'
    })
}