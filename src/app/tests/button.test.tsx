import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";

describe('button component', () => {
  it('should render with red background if disable', () => {
    render(<Button disabled onclick={() => { }}>Click me</Button>);

    const button = screen.getByRole('button', { name: 'Click me' })

    expect(button).toHaveStyle('background-color: rgb(255, 0, 0)');
  })
  it('verify if button onclick is chamed', () => {
    const onClick = jest.fn()
    render(<Button disabled onclick={onClick}>Click Me</Button>)

    const button = screen.getByText(/click me/i)

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledWith(10)
  })
})