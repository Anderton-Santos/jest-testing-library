"use client"

import { useEffect, useState } from "react";

type UserProps = {
  id: string;
  name: string;
  email: string
}

export default function FilterUser() {
  const [user, setUser] = useState<UserProps[]>([])
  const [filterd, setFiltered] = useState<UserProps[]>([])

  const [seach, setSearch] = useState<string>("")

  useEffect(() => {
    async function Api() {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const response: UserProps[] = await data.json()
      setUser(response)
      setFiltered(response)
    }

    Api()

  }, [])

  useEffect(() => {
    const filt = user.filter((prev) => prev.name.toLocaleLowerCase().includes(seach.toLocaleLowerCase()))

    setFiltered(filt)

  }, [seach, user])

  return (
    <section className="bg-black w-full h-screen text-white p-4">

      <input
        className="border border-white rounded-2xl mb-4 p-1"
        type="search"
        value={seach}
        onChange={(e) => setSearch(e.target.value)}
        name=""
        id="" />

      <ul>
        {filterd.map((item) => (
          <li key={item.id} className="flex flex-col mb-4">
            <span>nome: {item.name}</span>
            <span>email: {item.email}</span>

          </li>
        ))}
      </ul>
    </section>
  )
}