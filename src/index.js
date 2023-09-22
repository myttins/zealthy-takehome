import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Admin from './containers/Admin';

import './index.css';
import Main from './containers/Main';
import Ticket from './containers/Ticket';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'ticket/:id',
        element: <Ticket />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
