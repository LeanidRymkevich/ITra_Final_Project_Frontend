import { FC, useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, IconButton, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import { resetState, selectUsername } from '../../redux/AuthSlice/AuthSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { resetAuthStateInLS } from '../../utils/localStorageUtils';

import { PATHS } from '../../types/enums';

const noBgOnHover = [
  () => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      background: 'none',
      cursor: 'auto',
    },
  }),
];

const UserMenu: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const username: string | null = useSelector(selectUsername);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleSignOut = (): void => {
    resetAuthStateInLS();
    dispatch(resetState());
    handleClose();
    navigate(PATHS.SIGN_IN);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <AccountCircleIcon color="secondary" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem disableRipple sx={noBgOnHover}>
          <Typography noWrap variant="body1">
            {`${t('header:WelcomeMsg')}, `}
          </Typography>
          &nbsp;
          <Typography color="primary" noWrap variant="body1">
            {`${username}!`}
          </Typography>
        </MenuItem>
        <MenuItem disableRipple sx={noBgOnHover}>
          <Button
            variant="contained"
            sx={{ width: '100%' }}
            onClick={handleSignOut}
          >
            {t('header:SignOut')}
            <LogoutIcon sx={{ marginLeft: 1 }} />
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
