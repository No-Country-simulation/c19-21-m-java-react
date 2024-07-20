import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx';
import Home from './pages/home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import UserSignup from './UserManagement/components/UserSignup.jsx';
import { StrictMode } from 'react';

const router = createBrowserRouter([
  (
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/servicios",
          element: <></>
        },
        {
          path: "/sobre-nosotros",
          element: <></>
        },
        {
          path: "/como-funciona",
          element: <></>
        },
        {
          path: "/iniciar-sesion",
          element: <></>
        },
        {
          path: "/profile",
          element: <UserSignup />
        },
        {
          path: "/registrarse",
          element: <UserSignup />
        }
      ]
    }
  )
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)

