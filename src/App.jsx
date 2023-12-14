import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Sort from "./routes/Sort";
import Queue from "./routes/Queue";
import Stack from "./routes/Stack";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/sort", element: <Sort /> },
        { path: "/queue", element: <Queue /> },
        { path: "/stack", element: <Stack /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
