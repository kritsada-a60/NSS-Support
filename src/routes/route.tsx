import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import LandingPage from "../pages/landing-page/LandingPage";
import Information from "../pages/information-mgm/Information";
import WorkFlow from "../pages/work-flow/WorkFlow";
import RootLayout from "../pages/layout/RootLayout";
import MainLayout from "../pages/layout/MainLayout";
import CaMonitor from "../pages/ca-monitor/CaMonitor";
import InitialHardware from "../pages/initial-hardware/InitialHardware";
import SamplePage from "../pages/sample-page/SamplePage";
import Navbar from "../pages/layout/Navbar";

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
        path: "/store-operation/IM001",
        element: (
          <MainLayout>
            <Information />
          </MainLayout>
        ),
      },
      {
        path: "/store-operation/WF001",
        element: (
          <MainLayout>
            <WorkFlow />
          </MainLayout>
        ),
      },
      {
        path: "/store-operation/CM001",
        element: (
          <MainLayout>
            <CaMonitor />
          </MainLayout>
        ),
      },
      {
        path: "/store-operation/IH001",
        element: (
          <MainLayout>
            <InitialHardware />
          </MainLayout>
        ),
      },
    ],
  },
]);
