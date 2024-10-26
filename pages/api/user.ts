import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();
export default async function POST(req: NextApiRequest,res:NextApiResponse) {
  
    if (req.method === 'POST') {
    try {
        // Parse the request body
        const { username, password } = await req.body;

        // Debugging logs to see the received data
      const user=await prisma.user.create({
       data:{
        username:username,
        password:password,
       }
      })

      console.log("User id",user.id);
      

        // You can handle the signup logic here (e.g., save to database)

        // Return a success response
        return res.status(200).json({ message: 'Sign up successful' });
    } catch (error) {
        console.error("Error processing sign up:", error);

        // Return an error response
        return res.status(400).json({ message: 'Error processing sign up request' }, { status: 500 });
    }
}
}
