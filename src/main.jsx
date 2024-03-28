import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import BookList from './Components/BookList/BookList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
       {
        path:"/",
        element:<Home></Home>
       },
       {
        path:"/Listed Books",
        element:<BookList></BookList>
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
