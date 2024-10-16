'use client'

import Labelinput from "./Labelinput";

const signin=()=>{
    const handleClick=()=>{
        console.log("Clicked");
        
    }
   return(
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign Up
                        </div>
                    </div>
                    <div className="pt-2">  <Labelinput label="UserName" PlaceHolder="satendarpra@gmail.com"/>
        <Labelinput label="Password" type={"password"} PlaceHolder="123456"/>
        <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleClick}>Sign in</button>
        </div>
      </a>
    </div>
    </div>
   )
}

export default signin;