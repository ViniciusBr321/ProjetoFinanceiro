import './App.css';
import Home from "./Pages/Home/Home";
import ContasPagar from "./Component/ContasPagar/ContasPagar";
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/contasPagar",
    element: <ContasPagar />,
  },
]);

function App() {
  return (
    
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
