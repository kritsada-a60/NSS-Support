import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import LandingPage from "../pages/landing-page/LandingPage";
import Information from "../pages/information-mgm/Information";
import WorkFlow from "../pages/work-flow/WorkFlow";
import RootLayout from "../pages/layout/RootLayout";
import MainLayout from "../pages/layout/MainLayout";
import SamplePage from "../pages/sample-page/SamplePage";

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
        path: "store-operation",
        element: <LandingPage />,
      },
      {
        path: "store-operation/information",
        element: (
          <MainLayout>
            <Information />
          </MainLayout>
        ),
      },
      {
        path: "store-operation/work-flow",
        element: (
          <MainLayout>
            <WorkFlow />
          </MainLayout>
        ),
      },
    ],
  },
]);
