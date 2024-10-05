import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../types/enums';
import { AppBar, Box, Container } from '@mui/material';
import ModeSwitcher from './ModeSwitcher';

const Header: FC = () => {
  return (
    <AppBar position="sticky" color="default">
      <Container>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <NavLink to={PATHS.MAIN_PAGE}>Main</NavLink>
          <NavLink to={PATHS.SIGN_IN}>Sign In</NavLink>
          <NavLink to={PATHS.SIGN_UP}>Sign Up</NavLink>
          <NavLink to={PATHS.SEARCH_RESULTS_PAGE}>Search Page</NavLink>
          <NavLink to={PATHS.USER_PAGE}>User's Page</NavLink>
          <NavLink to={PATHS.TEMPLATE_PAGE}>Template Page</NavLink>
          <NavLink to={PATHS.ADMIN_PAGE}>Admin's Page</NavLink>
        </Box>
        <ModeSwitcher />
      </Container>
    </AppBar>
  );
};

export default Header;
