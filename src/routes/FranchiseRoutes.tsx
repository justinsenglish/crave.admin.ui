import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

const FranchiseListPage = Loadable(lazy(() => import('pages/franchises/list')));
const FranchiseRoyaltiesPage = Loadable(lazy(() => import('pages/franchises/royalties')));

// ==============================|| MAIN ROUTING ||============================== //

const FranchiseRoutes = {
  path: '/',
  children: [
    {
      path: '/franchises',
      element: <DashboardLayout />,
      children: [
        {
          path: '/',
          element: <FranchiseListPage />
        },
        {
          path: ':id/royalties',
          element: <FranchiseRoyaltiesPage />
        }
      ]
    }
  ]
};

export default FranchiseRoutes;
