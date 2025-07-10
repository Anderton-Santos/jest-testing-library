import { render, screen } from '@testing-library/react'
import Main from './tests/main';
import Task from './tests/task/tasks';
import Tables from './tests/table/table';
import FilterUser from './tests/filterUser/filterUser';


export default function Home() {

  return (
    <div>
      <FilterUser />
    </div>

  );
}

// export default function Home() {

//   const tablesList = [
//     { label: "Home", content: "Bem vindo a pagina home!" },
//     { label: "Sobre", content: "Apresentação sobre os dados referidos" },
//     { label: "main", content: "Conteudo principal da pagina" },
//     { label: "Footer", content: "Parte destinada aos contantos e docs" },
//   ]
//   return (
//     <div>

//       {/* <Main /> */}

//       <Tables tables={tablesList} />

//     </div>

//   );
// }
