import { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

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
  errors: FieldErrors<T>;
  isPending: boolean;
}

interface CustomFormButtonProps {
  isPending: boolean;
}

export type {
  ChildrenOnlyProps,
  NavigationBarProps,
  NavButtonProps,
  CustomFieldProps,
  CustomFormButtonProps,
};
