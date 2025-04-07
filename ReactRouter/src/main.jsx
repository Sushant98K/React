import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import User from './Pages/User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [      
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path: '/home',
        element:<Home/>
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/contact',
        element:<Contact/>
      },
      {
        path: '/user/:id',
        element:<User/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </StrictMode>,
)
