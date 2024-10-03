import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/login';

export const Router = createBrowserRouter([
   {
      path: '/',
      element: <Login />,
   },
]);
