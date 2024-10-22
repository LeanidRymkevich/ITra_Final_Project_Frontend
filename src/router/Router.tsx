import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PATHS, USER_ROLES } from '../types/enums';

import Layout from '../components/Layout';
import NotFoundPage from '../pages/NotFoundPage';

import commonRoutes from './commonRoutes';
import { publicRoutes } from './publicRoutes';
import { userRoutes, adminRoutes } from './privateRoutes';

import { selectRole } from '../redux/AuthSlice/AuthSlice';

const Router = () => {
  const role: USER_ROLES | null = useSelector(selectRole);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.ROOT} element={<Layout />}>
          {commonRoutes}
          {!role
            ? publicRoutes
            : role === USER_ROLES.USER
            ? userRoutes
            : adminRoutes}
          <Route path={PATHS.NOT_EXIST} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
