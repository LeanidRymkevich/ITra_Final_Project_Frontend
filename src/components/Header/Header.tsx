import { FC, useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import ModeSwitcher from '../UI/ModeSwitcher';
import CustomAppBar from './CustomAppBar';
import SearchField from '../UI/SearchField';
import MenuIcon from '@mui/icons-material/Menu';
import { APP_TITLE } from '../../constants/constants';
import NavigationBar from './Navigation/NavigationBar';
import LangSwitcher from '../UI/LangSwitcher';
import UserMenu from '../UI/UserMenu';
import { selectToken } from '../../redux/AuthSlice/AuthSlice';
import { useSelector } from 'react-redux';

const Header: FC = () => {
  const token: string | null = useSelector(selectToken);
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
        {token ? <UserMenu /> : <></>}
        <LangSwitcher />
        <ModeSwitcher />
      </CustomAppBar>
      <NavigationBar {...{ isMenuOpen, handleMenuToggle }} />
    </>
  );
};

export default Header;
