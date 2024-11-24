import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import FranchiseRoutes from './FranchiseRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([LoginRoutes, MainRoutes, FranchiseRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;
