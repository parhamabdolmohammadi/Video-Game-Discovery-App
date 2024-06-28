import { createBrowserRouter } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import HomePage from "./assets/pages/HomePage";
import GameDetailPage from "./assets/pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
