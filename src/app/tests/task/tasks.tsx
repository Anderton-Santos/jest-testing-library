"use client"

import { useState } from "react"

interface tarefas {
  id: string;
  span: string
}

export default function Task() {
  const [input, setInput] = useState("")
  const [task, setTask] = useState<tarefas[]>([])

  const [isEditing, setisditing] = useState<number | null>(null)

  const handleAdd = () => {

    if (isEditing !== null) {
      const updatedTasks = [...task];
      updatedTasks[isEditing] = { ...updatedTasks[isEditing], span: input, };
      setTask(updatedTasks)
      setisditing(null)
      return
    }

    const newTask: tarefas = {
      id: crypto.randomUUID(),
      span: input,
    };

    setTask((prev) => [...prev, newTask]);
    setInput("");
  };

  const handleDelete = (item: string) => {
    const fill = task.filter(prev => prev.id !== item)
    setTask(fill)

  }

  const handleEdit = (id: string) => {
    const index = task.findIndex((i) => i.id === id)
    if (index !== -1) {
      setisditing(index)
      setInput(task[index].span)
    }

  }

  return (


    <section className="w-full h-screen bg-black p-4">
      <div className="text-white">
        <h1>Task - TO-do</h1>

        <div>
          <input
            className="border border-white"
            type="text"
            placeholder="Digite sua tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="bg-amber-500 p-1 rounded-2xl ml-4 cursor-pointer" onClick={() => handleAdd()}>Adicionar</button>

        </div>

        <ul>
          {task.map((item, index) => (
            <li key={item.id} className="flex gap-4">
              <span>{item.span}</span>
              <button className="" onClick={() => handleDelete(item.id)}>X</button>
              <button onClick={() => (handleEdit(item.id))}>E</button>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}