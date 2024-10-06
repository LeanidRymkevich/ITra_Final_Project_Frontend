import { ReactElement } from 'react';

interface ChildrenOnlyProps {
  children: ReactElement[];
}

interface NavigationBarProps {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
}

export type { ChildrenOnlyProps, NavigationBarProps };
