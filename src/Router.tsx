import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "stack",
    //     element:
    //   }
    // ]
  },
]);

export default router;
