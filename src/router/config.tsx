
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import TeamPage from '../pages/team/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/team',
    element: <TeamPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
