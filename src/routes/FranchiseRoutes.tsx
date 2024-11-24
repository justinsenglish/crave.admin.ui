import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

const RoyaltiesPage = Loadable(lazy(() => import('pages/franchises/royalties')));

// ==============================|| MAIN ROUTING ||============================== //

const FranchiseRoutes = {
  path: '/',
  children: [
    {
      path: '/franchises',
      element: <DashboardLayout />,
      children: [
        {
          path: 'royalties',
          element: <RoyaltiesPage />
        }
      ]
    }
  ]
};

export default FranchiseRoutes;
