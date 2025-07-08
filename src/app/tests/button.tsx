import { ReactNode } from "react";

const Button = ({ disabled, children, onclick }:
  {
    disabled: boolean,
    children: ReactNode,
    onclick: (number: number) => void
  }) => {

  return (
    <button
      onClick={() => onclick(10)}
      style={{ backgroundColor: disabled ? "red" : "blue" }}>{children}</button>
  )

}

export default Button