<<<<<<< HEAD
import './App.css';
import Home from "./Pages/Home/Home";
import ContasPagar from "./Component/ContasPagar/ContasPagar";
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
=======
import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home/Home";
import List from "./Pages/Lista/List";


>>>>>>> f9cea5dff0470058700004b01c2bffc685f787b3
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
<<<<<<< HEAD
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


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
=======
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
>>>>>>> f9cea5dff0470058700004b01c2bffc685f787b3
  },
]);

function App() {
  return (
<<<<<<< HEAD
    
=======
>>>>>>> f9cea5dff0470058700004b01c2bffc685f787b3
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
