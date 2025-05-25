import './index.css'
import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Layout from './components/Layout.jsx'
import Character from './pages/Character.jsx'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/character/:id",
        element: <Character/>
      }
    ]
  }
])

export {router}