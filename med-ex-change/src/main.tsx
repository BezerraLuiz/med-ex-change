import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './Routes/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/register',
    element: <Register/>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
