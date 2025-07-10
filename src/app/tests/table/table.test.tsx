//npx jest --watch src/app/tests/table

import { render, screen, fireEvent } from "@testing-library/react"
import Tables from "./table"

describe("Tables component", () => {
  const mockTabs = [
    { label: "Home", content: "Bem vindo a pagina home!" },
    { label: "Sobre", content: "Apresentação sobre os dados referidos" },
    { label: "main", content: "Conteudo principal da pagina" },
    { label: "Footer", content: "Parte destinada aos contantos e docs" },
  ]

  it("renders all tab buttons and the default active content", () => {
    render(<Tables tables={mockTabs} />)

    mockTabs.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    })

    expect(screen.getByText("Bem vindo a pagina home!")).toBeInTheDocument();
  })

  it("changes content and style when tab button is clicked", () => {
    render(<Tables tables={mockTabs} />)

    const clickButton = screen.getByText("Sobre")
    fireEvent.click(clickButton)
    expect(clickButton).toHaveStyle("background-color: #333")

    const contentScreen = screen.queryByText("Apresentação sobre os dados referidos")

    expect(contentScreen).toBeInTheDocument()

    expect(screen.queryByText("Bem vindo a pagina home!")).not.toBeInTheDocument();
  })
  it("rendres acessible buttons with role 'button' ", () => {
    render(<Tables tables={mockTabs} />)

    const buttons = screen.getAllByRole("button")
    expect(buttons).toHaveLength(mockTabs.length)

    mockTabs.forEach((tab) => {
      expect(screen.getByRole("button", { name: tab.label })).toBeInTheDocument();
    })
  })


  it("matches snapshot", () => {
    const { asFragment } = render(<Tables tables={mockTabs} />);
    expect(asFragment()).toMatchSnapshot();
  });


})
