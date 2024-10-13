import { ReactElement } from 'react';

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

export type { ChildrenOnlyProps, NavigationBarProps, NavButtonProps };
