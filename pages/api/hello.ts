import type { NextApiRequest,NextApiResponse } from "next";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    if (req.method === 'GET') {
     console.log("Get");
     
       return res.status(200).json({message:"Hello world"});
    }
    else{
       return  res.status(405).json({message:"Hello not Allowed"}) 
    }
}