
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import PageLoading from "./components/Loading";
import routerConfig from "./routes";

const App = () => (
  <Suspense fallback={<PageLoading />}>
    <RouterProvider router={routerConfig} />
  </Suspense>
);

export default App;