import { Button } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavButtonProps } from '../../../types/interfaces';

const NavButton: FC<NavButtonProps> = ({ href, children }) => {
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
