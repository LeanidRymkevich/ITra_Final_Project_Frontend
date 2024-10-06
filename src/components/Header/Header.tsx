import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../types/enums';
import { Box, IconButton, Typography } from '@mui/material';
import ModeSwitcher from '../UI/ModeSwitcher';
import CustomAppBar from './CustomAppBar';
import SearchField from './SearchField';
import MenuIcon from '@mui/icons-material/Menu';
import { APP_TITLE } from '../../constants';
import NavigationBar from './Navigation/NavigationBar';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <CustomAppBar>
        <IconButton
          size="large"
          edge="start"
          color="secondary"
          onClick={handleMenuToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="secondary"
          component="h1"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          {APP_TITLE}
        </Typography>
        <SearchField />
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
      </CustomAppBar>
      <NavigationBar {...{ isMenuOpen, handleMenuToggle }} />
    </>
  );
};

export default Header;
