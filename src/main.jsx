import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const router = createBrowserRouter([
  
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <About /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: 'resume', element: <Resume /> },
      ],
    },
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

