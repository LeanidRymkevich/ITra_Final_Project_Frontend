import { ReactElement } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

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

export type {
  ChildrenOnlyProps,
  NavigationBarProps,
  NavButtonProps,
  CustomFieldProps,
  CustomFormButtonProps,
  CustomPasswordProps,
};
