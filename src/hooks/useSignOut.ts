import { resetState, setUnauthorizedError } from '../redux/AuthSlice/AuthSlice';
import { resetAuthStateInLS } from '../utils/localStorageUtils';
import { useAppDispatch } from './reduxHooks';

const useSignOut = () => {
  const dispatch = useAppDispatch();

  const signOut = (): void => {
    resetAuthStateInLS();
    dispatch(resetState());
  };

  const signOutWithError = (error: string): void => {
    dispatch(setUnauthorizedError(error));
    signOut();
  };

  return { signOut, signOutWithError };
};

export default useSignOut;
