import { fireEvent, render, screen } from "@testing-library/react"
import Task from "./tasks"

describe("test in paste tasks", () => {
  it("verify input screen viewer", () => {
    render(<Task />)

    const input = screen.getByPlaceholderText("Digite sua tarefa")
    expect(input).toBeInTheDocument();
  })

  it("verify click button", () => {
    render(<Task />)
    const input = screen.getByPlaceholderText("Digite sua tarefa")
    const button = screen.getByText(/adicionar/i)

    // Simula digitação
    fireEvent.change(input, { target: { value: "Estudar React" } })

    // Simula clique
    fireEvent.click(button)

    // Verifica se a tarefa foi adicionada à tela
    expect(screen.getByText("Estudar React")).toBeInTheDocument()

  })
  it('verify button click and task update screen', () => {
    render(<Task />)

    const input = screen.getByPlaceholderText("Digite sua tarefa")
    const addbutton = screen.getByText(/adicionar/i)

    // Adiciona tarefa
    fireEvent.change(input, { target: { value: "Estudar React" } })
    fireEvent.click(addbutton)

    // Clica no botão "E" para editar a tarefa
    const editButton = screen.getByText("E")
    fireEvent.click(editButton)

    // Altera o input para o novo texto
    fireEvent.change(input, { target: { value: "Estudar Testing Library" } })

    fireEvent.click(addbutton)

    //Verificar se novo tezto estar na tela
    expect(screen.getByText("Estudar Testing Library")).toBeInTheDocument()

    // 6. Verifica se o texto antigo sumiu
    expect(screen.queryByText("Estudar React")).not.toBeInTheDocument()



  })
  it("delete tarefa", () => {
    render(<Task />)

    const input = screen.getByPlaceholderText("Digite sua tarefa")
    const button = screen.getByText(/adicionar/i)

    //Digitar e clicar no botão
    fireEvent.change(input, { target: { value: "Estudar React" } })
    fireEvent.click(button)

    //clicar no button delete  everificar se sumiu
    const Deletebutton = screen.getByText("X")

    fireEvent.click(Deletebutton)
    expect(screen.queryByText("Estudar React")).not.toBeInTheDocument()
  })
})