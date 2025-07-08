"use client"
// npm run test:watch
//npx jest --watch src/app/tests


import { useState } from "react"


export default function Main() {
  const [message, setMessage] = useState("joy no suporto mais")
  return (

    <div>

      <h1>Ola mundo</h1>
      <span>{message}</span>

      <div>
        <button className="cursor-pointer bg-amber-300 p-2 mt-6" onClick={() => setMessage("hello world!")}>Change Message</button>
      </div>


    </div>

  );
}
