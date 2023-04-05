import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MovieDataProvider } from './Context/Context'
import { BrowserRouter } from 'react-router-dom'
// import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import BookingForm from './Components/Bookingform'
// import ErrorPage from './ErrorPage'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieDataProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </MovieDataProvider>
  </React.StrictMode>,
)
