import { Route, Navigate } from 'react-router-dom';
import { PATHS } from '../types/enums';
import userPageRoutes from './pageRoutes/userPageRoutes';
import templatePageRoutes from './pageRoutes/templatePageRoutes';

const redirectPath = PATHS.MAIN_PAGE;
const adminForbiddenPaths = [PATHS.SIGN_IN, PATHS.SIGN_UP];
const userForbiddenPaths = [PATHS.ADMIN_PAGE];

const userAndAdminRoutes: JSX.Element[] = [
  userPageRoutes,
  templatePageRoutes,
  ...adminForbiddenPaths.map(
    (path: string): JSX.Element => (
      <Route
        path={path}
        element={<Navigate to={redirectPath} />}
      />
    )
  ),
];

const userRoutes = [
  ...userAndAdminRoutes,
  userForbiddenPaths.map(
    (path: string): JSX.Element => (
      <Route
        path={path}
        element={<Navigate to={redirectPath} />}
      />
    )
  ),
];

export { userAndAdminRoutes, userRoutes };
