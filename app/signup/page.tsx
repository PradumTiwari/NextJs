import Signup from "@/components/Signup";

export default async function SignUp(){
    const res= await fetch('http://localhost:3000/api/route');
    const data=await res.json();

    return( <>
    <Signup/>
    </>
    )
}