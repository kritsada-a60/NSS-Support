import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/login'; // สมมติว่ามีไฟล์ Home.tsx ในโฟลเดอร์ pages

export const Router = createBrowserRouter([
   {
      path: '/',
      element: <Login />,
   },
]);
