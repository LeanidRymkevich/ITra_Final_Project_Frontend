import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../types/enums';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import ModeSwitcher from './ModeSwitcher';
import ElevationScroll from './ElevationScroll';

export const SCROLL_ELEM_ID = 'scroll-to-top-anchor';

const Header: FC = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar color="default">
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
      </ElevationScroll>
      <Toolbar id={SCROLL_ELEM_ID} />
    </>
  );
};

export default Header;
