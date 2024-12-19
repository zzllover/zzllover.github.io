import BaseLayout from "@src/layouts/BaseLayout";
import React, { lazy } from "react";
import { createHashRouter } from "react-router-dom";
const List = lazy(() => import("../pages/List"));
const Detail = lazy(() => import("../pages/Detail"));

const routerConfig = createHashRouter([
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

export default routerConfig;