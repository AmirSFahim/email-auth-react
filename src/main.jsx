import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import LogInn from './LogInn/LogInn';
import Register from './Register/Register';
import RegisterHero from './RegisterHero/RegisterHero';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {path: '/',
       element:<Home></Home>
    },
    {
      path: '/login',
      element: <LogInn></LogInn>
    },
    {
      path: '/register',
      element: <Register></Register>

    },
    {
      path: '/registerHero',
      element: <RegisterHero></RegisterHero>
    }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
