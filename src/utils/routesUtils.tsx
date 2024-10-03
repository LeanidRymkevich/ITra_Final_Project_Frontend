import { Navigate, Route } from 'react-router-dom';

const getRedirectRoutes = (forbiddenPaths: string[], redirectPath: string) => {
  return forbiddenPaths.map(
    (path: string, key: number): JSX.Element => (
      <Route
        path={`${path}/*`}
        element={<Navigate to={redirectPath} />}
        key={key}
      />
    )
  );
};

export { getRedirectRoutes };
