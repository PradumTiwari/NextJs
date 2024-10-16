'use client';

import Labelinput from "./Labelinput";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup=()=>{

    const handleSignup = async () => {
        console.log("UserName",username);
        console.log("Password",password);

        
        try {
            // Make a POST request to the signup API
            console.log("Inside");
            
            const response = await axios.post("http://localhost:3000/api/user", {
                username,
                password,
            });

            // Log the response for debugging
            console.log('Response:', response.data);

            // Redirect to the home page after successful sign up
            router.push("/");
        } catch (error: any) {
            console.error("Error during signup:", error.response?.data || error.message);

            // Optionally, show an alert to the user in case of an error
            alert("Signup failed: " + (error.response?.data?.message || error.message));
        }
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router=useRouter();
    
   return(
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign Up
                        </div>
                    </div>
                    <div className="pt-2">  <Labelinput onChange={(e)=>{setUsername(e.target.value)}} label="UserName" PlaceHolder="satendarpra@gmail.com"/>
        <Labelinput onChange={(e)=>{setPassword(e.target.value)}} label="Password" type={"password"} PlaceHolder="123456"/>
        <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
         onClick={handleSignup}>Sign in</button>
        </div>
      </a>
    </div>
    </div>
   )
}

export default Signup;