import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Donation from './Components/Donation/Donation'
import Statistics from './Components/Statistics/Statistics'
import MainLayout from './Components/MainLayout/MainLayout'
import CartDetails from './Components/CartDetails/CartDetails'
import ErrorPage from './Components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('/donation.json'),
        element: <Home></Home>
      },
      {
        path: '/donation',
        loader: () => fetch('/donation.json'), 
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donationItem/:donateId',
        loader: () => fetch('/donation.json'), 
        element: <CartDetails></CartDetails>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
