import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ProfilePages from './pages/ProfilesPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/profiles',
    element: <ProfilePages/>,
     errorElement: <NotFoundPage/>,
     children:[
{
    path:'/profiles/:profileId',
    element: <ProfilePage/>
  }
     ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
