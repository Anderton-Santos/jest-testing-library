import { render, screen, fireEvent, getByText } from '@testing-library/react';
import Main from './main';

export const sum = (x: number, y: number): number => {
  return x + y;
};

describe('Função sum', () => {
  it('deve retornar 8 quando somar 4 + 4', () => {
    expect(sum(4, 4)).toBe(8);
  });


  it("Should render app with hello message", () => {
    render(<Main />);
    screen.getByText("Ola mundo")
  });

  it("Trocar mensagem ao clicar em button", () => {
    render(<Main />)

    const button = screen.getByText(/change message/i)

    fireEvent.click(button)

    screen.getByText(/hello world!/i)

    const oldMessage = screen.queryByText("joy no suporto mais")
    expect(oldMessage).not.toBeInTheDocument();

  })

});
