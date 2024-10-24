import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { StatusCodes } from 'http-status-codes';
import { PATHS, USER_ROLES } from '../types/enums';
import { ServerResponseError } from '../types/interfaces';

import Layout from '../components/Layout';
import NotFoundPage from '../pages/NotFoundPage';

import commonRoutes from './commonRoutes';
import { publicRoutes } from './publicRoutes';
import { userRoutes, adminRoutes } from './privateRoutes';

import {
  resetState,
  selectRole,
  selectToken,
  selectUnauthorizedError,
} from '../redux/AuthSlice/AuthSlice';
import { useAppDispatch } from '../hooks/reduxHooks';
import { useCheckTokenMutation } from '../services/AuthService';

import { resetAuthStateInLS } from '../utils/localStorageUtils';
import UnauthorizedBackdrop from '../components/UnauthorizedBackdrop';

const Router = () => {
  const dispatch = useAppDispatch();
  const [checkToken] = useCheckTokenMutation();
  const role: USER_ROLES | null = useSelector(selectRole);
  const token: string | null = useSelector(selectToken);
  const unauthorizedError = useSelector(selectUnauthorizedError);

  // if store has a token check it before building the App
  useEffect(() => {
    const initialTokenCheck = async (): Promise<void> => {
      if (!token) return;
      try {
        await checkToken({}).unwrap();
      } catch (error) {
        const { status } = error as ServerResponseError;
        if (status === StatusCodes.UNAUTHORIZED) {
          dispatch(resetState());
          resetAuthStateInLS();
          return;
        }
        throw error;
      }
    };

    initialTokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {unauthorizedError && <UnauthorizedBackdrop />}
    </BrowserRouter>
  );
};

export default Router;
