import { createBrowserRouter } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import HomePage from "./assets/pages/HomePage";
import GameDetailPage from "./assets/pages/GameDetailPage";
import ErrorPage from "./assets/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
