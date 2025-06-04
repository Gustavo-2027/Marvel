import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Character from './pages/Character'
import Error from './pages/ErrorPage'

const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/character/:id",
        element: <Character/>
      },
      {
        errorElement: <Error/>,
      }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
