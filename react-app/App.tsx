
import React, { Suspense, lazy } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";

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
    element: <BaseLayout />,
    errorElement: <div>页面飞走了</div>,
    children: [
      {
        path: "/",
        element: <RNG />,
      },
      {
        path: "test1",
        element: <RNG1 />,
      },
      {
        path: "test2",
        element: <RNG2 />,
      },
      {
        path: "test3",
        element: <RNG3 />,
      },
      {
        path: "test4",
        element: <RNG4 />,
      },
      {
        path: "test5",
        element: <RNG5 />,
      },
      {
        path: "test6",
        element: <RNG6 />,
      },
      {
        path: "test7",
        element: <RNG7 />,
      },
      {
        path: "test8",
        element: <RNG8 />,
      },
      {
        path: "test9",
        element: <RNG9 />,
      },
      {
        path: "test10",
        element: <RNG10 />,
      },
    ],
  },
  // 独立layout的界面
  {
    path: "not",
    element: <div>2222</div>
  }
]);

const App = () => (
  <Suspense fallback={"...."}>
    <RouterProvider router={router} />
  </Suspense>
);

export default App;