import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Parse the request body
        const { username, password } = await request.json();

        // Debugging logs to see the received data
        console.log('Username:', username);
        console.log('Password:', password);

        // You can handle the signup logic here (e.g., save to database)

        // Return a success response
        return NextResponse.json({ message: 'Sign up successful' });
    } catch (error) {
        console.error("Error processing sign up:", error);

        // Return an error response
        return NextResponse.json({ message: 'Error processing sign up request' }, { status: 500 });
    }
}
