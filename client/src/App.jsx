import React from 'react'
import axios from 'axios'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
const App = () => {
  const routes = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    }
  ])
  return (
    <RouterProvider/>
  )
}

export default App
