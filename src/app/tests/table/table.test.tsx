//npx jest --watch src/app/tests/table

import { render, screen, fireEvent } from "@testing-library/react"
import Tables from "./table"

describe("Tables component", () => {
  const mockTabs = [
    { label: "Home", content: "Bem vindo ao meu mundo!" },
    { label: "Sobre", content: "Poderoso chefão" },
    { label: "Main", content: "Apresentação da pagina" },
    { label: "Footer", content: "no horizonte existe um lugar" },
  ]

  it("renders all tab buttons", () => {
    render(<Tables tables={mockTabs} />)

    mockTabs.forEach(tab => {
      expect(screen.getByText(tab.label)).toBeInTheDocument()
    })
  })

  it("renders content of the first tab initially", () => {
    render(<Tables tables={mockTabs} />)

    expect(screen.getByText("Bem vindo ao meu mundo!")).toBeInTheDocument()
  })

  it("changes tab content when a different tab is clicked", () => {
    render(<Tables tables={mockTabs} />)

    // Clica na aba "Sobre"
    const sobreButton = screen.getByText("Sobre")
    fireEvent.click(sobreButton)

    // Verifica o novo conteúdo
    expect(screen.getByText("Poderoso chefão")).toBeInTheDocument()

    // Verifica se o conteúdo anterior saiu
    expect(screen.queryByText("Bem vindo ao meu mundo!")).not.toBeInTheDocument()
  })
})
