import { Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import SearchResultsPage from '../pages/SearchResultsPage';

import { PATHS } from '../types/enums';

const commonRoutes: JSX.Element = (
  <>
    <Route
      path={PATHS.MAIN_PAGE}
      element={<MainPage />}
    />
    <Route
      path={PATHS.SEARCH_RESULTS_PAGE}
      element={<SearchResultsPage />}
    />
  </>
);
export default commonRoutes;
