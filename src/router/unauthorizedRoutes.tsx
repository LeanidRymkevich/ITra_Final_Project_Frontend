import { Navigate, Route } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import { PATHS } from '../types/enums';

const redirectPath = PATHS.SIGN_IN;
const forbiddenPaths = [PATHS.ADMIN_PAGE, PATHS.TEMPLATE_PAGE, PATHS.USER_PAGE];

const unauthorizedRoutes: JSX.Element[] = [
  <Route
    path={PATHS.SIGN_IN}
    element={<SignInPage />}
  />,
  <Route
    path={PATHS.SIGN_UP}
    element={<SignUpPage />}
  />,
  ...forbiddenPaths.map(
    (path: string): JSX.Element => (
      <Route
        path={path}
        element={<Navigate to={redirectPath} />}
      />
    )
  ),
];

export { unauthorizedRoutes };
