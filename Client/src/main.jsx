import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import {Loader} from "./Components/index.js"

// Pages
const Home = lazy(() => import("./Pages/Services/Home/Home.jsx"));
const About = lazy(() => import("./Pages/Services/About/About.jsx"));
const Contact = lazy(() => import("./Pages/Services/Contact/Contact.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path : "contact",
        element : <Contact />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
