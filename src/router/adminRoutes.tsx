import { Route } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import { PATHS } from '../types/enums';
import { userAndAdminRoutes } from './userRoutes';

const adminRoutes = [
  ...userAndAdminRoutes,
  <Route
    path={PATHS.ADMIN_PAGE}
    element={<AdminPage />}
  />,
];

export { adminRoutes };
