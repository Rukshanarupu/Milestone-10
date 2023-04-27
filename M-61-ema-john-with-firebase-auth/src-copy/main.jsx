import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProviders from './Providers/AuthProviders';
import Orders from './Components/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './Components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:"/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);


