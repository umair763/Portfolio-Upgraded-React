import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import userlenis from "./hooks/use-lenis";
import { routes } from "./routes.route";

function App() {
  userlenis();

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
