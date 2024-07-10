import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Nav } from "./components/navigation/Nav.jsx"
import { Home } from "./pages/Home.jsx"
import { Page404 } from "./pages/Page404.jsx"
import { Toto } from "./pages/Toto.jsx"


function App() {
  const router = createBrowserRouter([
    {
      element: <Nav />,
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/toto",
          element: <Toto />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;
