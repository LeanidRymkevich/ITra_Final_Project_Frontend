import { MouseEventHandler, ReactElement } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { USER_ROLES, USER_STATUS } from './enums';
import { Order } from './types';

interface ChildrenOnlyProps {
  children: (ReactElement | string)[] | (ReactElement | string);
}

interface NavigationBarProps {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
}

interface NavButtonProps {
  href: string;
  children: ReactElement | string;
}

interface CustomFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  error: string | undefined;
  isLoading: boolean;
}

interface CustomPasswordProps<T extends FieldValues>
  extends CustomFieldProps<T> {
  labelI18nKey: string;
  errorI18nKey: string;
  fieldName: string;
}

interface CustomFormButtonProps {
  isLoading: boolean;
  btnI18nKey: string;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit';
}

interface AuthState {
  token: string | null;
  username: string | null;
  role: USER_ROLES | null;
}

interface User {
  id: number;
  username: string;
  email: string;
  status: USER_STATUS;
  role: USER_ROLES;
}

interface AuthResponse {
  data: User;
  token: string;
}

interface SignInRequest {
  email: string;
  password: string;
}

interface SignUpRequest extends SignInRequest {
  username: string;
}

interface ServerResponseError {
  data: {
    error: string;
  };
  status: number;
}

interface UsersTableState {
  limit: number;
  page: number;
  total: number;
  isLoading: boolean;
  order: Order;
  orderBy: keyof User;
  selected: User['id'][];
  users: User[];
  error: {
    msg: string;
    code: number;
  };
}

interface GetUsersRequest {
  page: number;
  limit: number;
  orderBy: keyof User;
  order: Order;
}

interface GetUsersResponse {
  data: {
    users: User[];
    total: number;
  };
}

interface UpdateUserRequest extends Partial<Omit<User, 'id'>> {
  id: User['id'];
}

interface UpdateUserResponse {
  data: User;
}

interface DeleteUserResponse {
  data: { id: number };
}

export type {
  ChildrenOnlyProps,
  NavigationBarProps,
  NavButtonProps,
  CustomFieldProps,
  CustomFormButtonProps,
  CustomPasswordProps,
  AuthState,
  User,
  AuthResponse,
  SignInRequest,
  SignUpRequest,
  ServerResponseError,
  UsersTableState,
  GetUsersRequest,
  GetUsersResponse,
  UpdateUserResponse,
  DeleteUserResponse,
  UpdateUserRequest,
};
