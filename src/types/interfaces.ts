import { ReactElement } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { USER_ROLES, USER_STATUS } from './enums';

interface ChildrenOnlyProps {
  children: ReactElement[];
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
  isPending: boolean;
}

interface CustomPasswordProps<T extends FieldValues>
  extends CustomFieldProps<T> {
  labelI18nKey: string;
  errorI18nKey: string;
  fieldName: string;
}

interface CustomFormButtonProps {
  isPending: boolean;
  btnI18nKey: string;
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
};
