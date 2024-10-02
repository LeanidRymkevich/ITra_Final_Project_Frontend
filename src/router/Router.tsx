import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import { PATHS, ROLES } from '../types/enums';
import commonRoutes from './commonRoutes';
import NotFoundPage from '../pages/NotFoundPage';
import { unauthorizedRoutes } from './unauthorizedRoutes';
import { userRoutes } from './userRoutes';
import { adminRoutes } from './adminRoutes';

const Router = () => {
  const role: ROLES | null = ROLES.ADMIN;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATHS.ROOT}
          element={<Layout />}
        >
          {commonRoutes}
          {role
            ? unauthorizedRoutes
            : role === ROLES.USER
              ? userRoutes
              : adminRoutes}
        </Route>
        <Route
          path={PATHS.NOT_EXIST}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
