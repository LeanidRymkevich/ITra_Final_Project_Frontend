import { Button } from '@mui/material';
import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavButton: FC<{ href: string; children: ReactElement | string }> = ({
  href,
  children,
}) => {
  const location = useLocation();

  return (
    <Button
      component={NavLink}
      to={href}
      disabled={location.pathname === href}
      sx={{ width: '100%', justifyContent: 'flex-start', fontSize: '1.25rem' }}
    >
      {children}
    </Button>
  );
};

export default NavButton;
