import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/About";
import { Layout } from "./components/Layout/Layout";




export const router = createBrowserRouter([
    {
        path: "/", // http://localhost:3000/
        element: <Layout />,
        children: [
          {
            path: "/", // http://localhost:3000/
            element: <App />,
            index: true,
          },
          {
            path: "/about", // http://localhost:3000/about
            element: <About />,
          },
        ],
        },
    ]);