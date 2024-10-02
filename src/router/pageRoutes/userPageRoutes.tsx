import { Route, Navigate } from 'react-router-dom';

import UserPage from '../../pages/UserPage/UserPage';
import UserForms from '../../pages/UserPage/tabs/UserForms';
import UserTemplates from '../../pages/UserPage/tabs/UserTemplates';

import { PATHS } from '../../types/enums';

const userPageRoutes = (
  <Route
    path={PATHS.USER_PAGE}
    element={<UserPage />}
  >
    <Route
      index
      element={<Navigate to={PATHS.USER_TEMPLATES_TAB} />}
    />
    <Route
      path={PATHS.USER_TEMPLATES_TAB}
      element={<UserTemplates />}
    />
    <Route
      path={PATHS.USER_FORMS_TAB}
      element={<UserForms />}
    />
  </Route>
);

export default userPageRoutes;
