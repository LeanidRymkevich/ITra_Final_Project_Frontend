import { Route } from 'react-router-dom';

import { PATHS } from '../types/enums';

import AdminPage from '../pages/AdminPage/AdminPage';
import userPageRoutes from './pageRoutes/userPageRoutes';
import templatePageRoutes from './pageRoutes/templatePageRoutes';

import { getRedirectRoutes } from '../utils/routesUtils';

const redirectPath = PATHS.MAIN_PAGE;
const adminForbiddenPaths = [PATHS.SIGN_IN, PATHS.SIGN_UP];
const userForbiddenPaths = [...adminForbiddenPaths, PATHS.ADMIN_PAGE];

const getPrivateRoutes = (
  forbiddenPaths: string[],
  isAdmin: boolean = false
): JSX.Element => {
  return (
    <>
      {userPageRoutes}
      {templatePageRoutes}
      {isAdmin && <Route path={PATHS.ADMIN_PAGE} element={<AdminPage />} />}
      {getRedirectRoutes(forbiddenPaths, redirectPath)}
    </>
  );
};

const adminRoutes = getPrivateRoutes(adminForbiddenPaths, true);
const userRoutes = getPrivateRoutes(userForbiddenPaths);

export { adminRoutes, userRoutes };
