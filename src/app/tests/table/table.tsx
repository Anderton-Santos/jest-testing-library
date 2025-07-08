"use client"

import { ReactNode, useState } from "react";

type TabProps = {
  label: string;
  content: ReactNode
}

type Tab = {
  tables: TabProps[]
}

export default function Tables({ tables }: Tab) {
  const [tableIndex, setTableIndex] = useState(0)

  return (
    <>
      <div className="flex">
        {tables.map((item, index) => (
          <div key={index}>
            <button onClick={() => setTableIndex(index)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: tableIndex === index ? "#333" : "#ccc",
                color: tableIndex === index ? "#fff" : "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}

            >
              {item.label}</button>
          </div>

        ))}


      </div>
      <section className="flex flex-col">
        {tables[tableIndex].content}

      </section>
    </>
  )
}