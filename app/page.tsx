
import axios from 'axios';

async function getUserDetails(){
  await new Promise(resolve=>setTimeout(resolve,5000));
    const response={"FirstName":"Pradum","SecondName":"Tiwari","email":"satendarpradum@gmail.com"}
    return response;
}

export default async function Home() {
  
  const userData = await getUserDetails();
  const res = await fetch('http://localhost:3000/api/hello');
  const data=await res.json();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userData?.FirstName}
          </div>
          {userData?.email}
        </div>
        <div>{data.message}</div>
      </div>
    </div>
  );
}