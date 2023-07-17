
import React, { Suspense, lazy } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import PageLoading from "./components/Loading";

const List = lazy(() => import("./pages/List"));
const Detail = lazy(() => import("./pages/Detail"));


const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <div>页面飞走了</div>,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "detail",
        element: <Detail />,
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
  <Suspense fallback={<PageLoading />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default App;