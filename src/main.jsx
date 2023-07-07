import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import Home from './routes/home.jsx';
import Contact from './routes/contact.jsx';
import Softwaredev from './routes/softwaredev.jsx';
import Codingrat from './routes/codingrat.jsx';
import Queenproblem from './routes/queenproblem.jsx';
import Esports from './routes/esports.jsx';
import SnakeAI from './routes/snakeai.jsx';
import Websites from './routes/websites.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Contact",
        element: <Contact />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Softwaredev",
        element: <Softwaredev />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Codingrat",
        element: <Codingrat />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Queenproblem",
        element: <Queenproblem />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Esports",
        element: <Esports/>,
        errorElement: <ErrorPage />
      }
      ,
      {
        path: "/SnakeAI",
        element: <SnakeAI />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Websites",
        element: <Websites />,
        errorElement: <ErrorPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
