import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, IconButton, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FC, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

const noBgOnHover = [
  () => ({
    display: 'flex',
    flexWrap: 'wrap',
    '&:hover': {
      background: 'none',
      cursor: 'auto',
    },
  }),
];

const UserMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
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
            {`${'Oleg'}!`}
          </Typography>
        </MenuItem>
        <MenuItem disableRipple sx={noBgOnHover}>
          <Button
            variant="contained"
            sx={{ width: '100%', pointerEvents: 'all' }}
            onClick={handleClose}
          >
            {t('header:SignOut')}
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
