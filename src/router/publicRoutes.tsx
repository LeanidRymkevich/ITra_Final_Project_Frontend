import { Route } from 'react-router-dom';

import { PATHS } from '../types/enums';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

import { getRedirectRoutes } from '../utils/routesUtils';

const redirectPath = PATHS.SIGN_IN;
const forbiddenPaths = [PATHS.ADMIN_PAGE, PATHS.TEMPLATE_PAGE, PATHS.USER_PAGE];

const publicRoutes: JSX.Element = (
  <>
    <Route
      path={PATHS.SIGN_IN}
      element={<SignInPage />}
    />
    <Route
      path={PATHS.SIGN_UP}
      element={<SignUpPage />}
    />
    {getRedirectRoutes(forbiddenPaths, redirectPath)}
  </>
);

export { publicRoutes };
