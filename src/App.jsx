import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import Dashboard from "./Pages/Dashboard";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import AnalyticsLand from "./components/AnalyticsLand";
import AnalyticsAir from "./components/AnalyticsAir";
import AnalyticsSea from "./components/AnalyticsSea";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
        children:[
          {
            path:"air",
            element:<AnalyticsAir />
          },
          {
            path:"land",
            element:<AnalyticsLand />
          },
          {
            path:"sea",
            element:<AnalyticsSea />
          },
        ]
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Outlet />
      <RouterProvider router={router} />
    
      {/* <Analytics /> */}


      {/* <Navbar /> */}
    
    </>
  );
}

export default App;
