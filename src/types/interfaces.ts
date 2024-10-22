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
  id: string;
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

interface EnhancedTableHeadCell<T extends { id: string }> {
  disablePadding: boolean;
  id: keyof T;
  label: string;
  numeric: boolean;
}

interface EnhancedTableHeadProps<T extends { id: string }> {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: readonly EnhancedTableHeadCell<T>[];
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  tableName: string;
  buttonsBar: JSX.Element;
}

interface EnhancedTableProps<T extends { id: string }> {
  rows: T[];
  tableName: string;
  buttonsBar: JSX.Element;
  headCells: readonly EnhancedTableHeadCell<T>[];
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
  EnhancedTableHeadCell,
  EnhancedTableHeadProps,
  EnhancedTableToolbarProps,
  EnhancedTableProps,
};
