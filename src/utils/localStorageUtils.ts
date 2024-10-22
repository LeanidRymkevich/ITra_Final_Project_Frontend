import { AuthResponse, AuthState } from '../types/interfaces';

const saveAuthStateToLS = (resp: AuthResponse): void => {
  const { data, token } = resp;
  const { username, role } = data;
  const dataToStore: AuthState = { username, role, token };

  Object.entries(dataToStore).forEach(([key, value]): void => {
    localStorage.setItem(key, value);
  });
};

const resetAuthStateInLS = (): void => {
  const records: (keyof AuthState)[] = ['username', 'role', 'token'];
  records.forEach((key: keyof AuthState): void => {
    localStorage.setItem(key, JSON.stringify(null));
  });
};

const getAuthStateFromLS = (): AuthState => {
  const records: (keyof AuthState)[] = ['username', 'role', 'token'];
  return records.reduce((state, record) => {
    const value = localStorage.getItem(record);
    state[record] = value !== 'null' ? value : null;
    return state;
  }, {} as Record<keyof AuthState, string | null>) as AuthState;
};

export { saveAuthStateToLS, resetAuthStateInLS, getAuthStateFromLS };
