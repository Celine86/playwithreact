import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Nav } from "./components/navigation/Nav.jsx"
import { Home } from "./pages/Home.jsx"
import { Page404 } from "./pages/Page404.jsx"
import { SleepingRoom } from './pages/SleepingRoom.jsx';


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
          path: "/sleepingroom",
          element: <SleepingRoom />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;
