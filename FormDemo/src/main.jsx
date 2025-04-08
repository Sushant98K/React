import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home.jsx';
import ErrorPage from '../../ReactRouter/src/components/ErrorPage.jsx';
import Single from './Form/Single.jsx';
import DetailForm from './Form/DetailForm.jsx';
import Dashboard from './Pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element:<Dashboard/>
      },
      {
        path: '/home',
        element:<Home/>
      },
      {
        path: '/single',
        element:<Single/>
      },
      {
        path: '/details',
        element:<DetailForm/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
