import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/layout';
import { Attendees } from '@/pages/attendees';
import { Events } from '@/pages/events';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/participantes" />,
      },
      {
        path: '/eventos',
        element: <Events />,
      },
      {
        path: '/participantes',
        element: <Attendees />,
      },
    ],
  },
]);

export default router;
