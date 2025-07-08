import { render, screen } from '@testing-library/react'
import Main from './tests/main';
import Task from './tests/task/tasks';
import Tables from './tests/table/table';

export default function Home() {

  const tablesList = [
    { label: "Homme", content: "Bem vindo ao meu mundo!" },
    { label: "Sobre", content: "Poderoso chefão" },
    { label: "main", content: "Apresentação da pagina" },
    { label: "Footer", content: "no horizonte existe um lugar" },
  ]
  return (
    <div>
      {/* <Main /> */}


      <Tables tables={tablesList} />


    </div>

  );
}
