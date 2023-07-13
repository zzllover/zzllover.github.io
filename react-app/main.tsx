import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./main.less";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";

// Say something
console.log("[ERWT] : Renderer execution started");

const RNG = lazy(() => import("./pages/RNG"));
const RNG1 = lazy(() => import("./pages/RNG1"));
const RNG2 = lazy(() => import("./pages/RNG2"));
const RNG3 = lazy(() => import("./pages/RNG3"));
const RNG4 = lazy(() => import("./pages/RNG4"));
const RNG5 = lazy(() => import("./pages/RNG5"));
const RNG6 = lazy(() => import("./pages/RNG6"));
const RNG7 = lazy(() => import("./pages/RNG7"));
const RNG8 = lazy(() => import("./pages/RNG8"));
const RNG9 = lazy(() => import("./pages/RNG9"));
const RNG10 = lazy(() => import("./pages/RNG10"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "test",
          element: <RNG />
        },
        {
          path: "test1",
          element: <RNG1 />
        },        {
          path: "test2",
          element: <RNG2 />
        },        {
          path: "test3",
          element: <RNG3 />
        },        {
          path: "test4",
          element: <RNG4 />
        },        {
          path: "test5",
          element: <RNG5 />
        },        {
          path: "test6",
          element: <RNG6 />
        },        {
          path: "test7",
          element: <RNG7 />
        },        {
          path: "test8",
          element: <RNG8 />
        },        {
          path: "test9",
          element: <RNG9 />
        },
        {
          path: "test10",
          element: <RNG10 />
        },
      ],
  },
]);

// Application to Render
const app = (
  <div className="main">
    <Suspense fallback={"...."}>
      <RouterProvider router={router} />
    </Suspense>
  </div>
);

// Render application in DOM
createRoot(document.getElementById("root")).render(app);
