import { createBrowserRouter } from "react-router-dom";
import { About, Skills, Projects, Services, Contact, NotFoundPage } from "./pages"; 
import { MainLayout } from "./components/layout/main.layout";

export const routes = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <MainLayout />, // MainLayout wraps all the child routes
    children: [
      {
        path: "/",
        element: <About />, // About page as the main page
      },
      {
        path: "/skills",
        element: <Skills />, // Skills page
      },
      {
        path: "/projects",
        element: <Projects />, // Projects page
      },
      {
        path: "/services",
        element: <Services />, // Services page
      },
      {
        path: "/contact",
        element: <Contact />, // Contact page
      },
    ],
  },
]);
