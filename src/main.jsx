import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css';


import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
        <Toaster></Toaster>
  </React.StrictMode>
)
