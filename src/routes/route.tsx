import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import LandingPage from "../pages/landing-page/LandingPage";
import RootLayout from "../pages/layout/RootLayout";
import MainLayout from "../pages/layout/MainLayout";
import SamplePage from "../pages/sample-page/SamplePage";
import Navbar from "../pages/layout/Navbar";
import ContentLayout from "../pages/layout/ContentLayout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/sample",
        element: <SamplePage />,
      },
      {
        path: "/store-operation",
        element: (
          <Navbar>
            <LandingPage />
          </Navbar>
        ),
      },
      {
        path: "/store-operation/:levelA",
        element: (
          <MainLayout>
            <ContentLayout />
          </MainLayout>
        ),
        children: [
          {
            path: ":levelB",
            children: [
              {
                path: ":levelC",
                children: [
                  {
                    path: ":levelD",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
