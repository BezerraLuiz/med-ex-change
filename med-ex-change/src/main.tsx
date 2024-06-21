import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Registrar from './Routes/Registrar';
import LoginForm from './Components/login-page/LoginForm';
import ImgLogin from './Components/login-page/ImgLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: (
          <>
            <LoginForm />
            <ImgLogin />
          </>
        ),
      },
      {
        path: 'registrar',
        element: <Registrar />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
