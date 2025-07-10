import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import FilterUser from "./filterUser"
import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"
import "@testing-library/jest-dom"

// Dados mockados para simular a resposta da API
const mockUsers = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
  { id: "3", name: "Alice Johnson", email: "alice@example.com" },
]

// Setup do MSW para interceptar requisições
const server = setupServer(
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      { id: "1", name: "John Doe", email: "john@example.com" },
      { id: "2", name: "Jane Smith", email: "jane@example.com" },
      { id: "3", name: "Alice Johnson", email: "alice@example.com" },
    ])
  })
)

// Iniciar o MSW antes de todos os testes
beforeAll(() => server.listen())

// Resetar os handlers após cada teste
afterEach(() => server.resetHandlers())

// Finalizar o MSW após todos os testes
afterAll(() => server.close())

describe("FilterUser component", () => {
  it("deve exibir todos os usuários ao carregar", async () => {
    render(<FilterUser />)

    // Esperar até os nomes estarem renderizados
    for (const user of mockUsers) {
      await waitFor(() => {
        expect(screen.getByText(`nome: ${user.name}`)).toBeInTheDocument()
      })
    }
  })

  it("deve filtrar os usuários com base na pesquisa", async () => {
    render(<FilterUser />)

    const input = screen.getByRole("searchbox")

    // Espera os nomes carregarem
    await waitFor(() => {
      expect(screen.getByText(/nome: John Doe/i)).toBeInTheDocument()
    })

    // Digita no input para filtrar
    fireEvent.change(input, { target: { value: "Jane" } })

    // Verifica se apenas o nome filtrado aparece
    expect(screen.getByText(/nome: Jane Smith/i)).toBeInTheDocument()
    expect(screen.queryByText(/nome: John Doe/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/nome: Alice Johnson/i)).not.toBeInTheDocument()
  })
})
