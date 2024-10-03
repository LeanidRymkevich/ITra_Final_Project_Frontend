import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATHS, ROLES } from '../types/enums';

import Layout from '../components/Layout';
import commonRoutes from './commonRoutes';
import NotFoundPage from '../pages/NotFoundPage';

import { publicRoutes } from './publicRoutes';
import { userRoutes, adminRoutes } from './privateRoutes';

const Router = () => {
  // TODO Later change to getting authentication state, currently null for not authenticated user
  const role: ROLES | null = (() => null)();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATHS.ROOT}
          element={<Layout />}
        >
          {commonRoutes}
          {!role
            ? publicRoutes
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
