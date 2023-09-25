import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Donation from './Components/Donation/Donation'
import Statistics from './Components/Statistics/Statistics'
import MainLayout from './Components/MainLayout/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        loader: () => fetch('/donation.json'),
        element: <Home></Home>
      },
      {
        path: 'donation',
        element: <Donation></Donation>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
