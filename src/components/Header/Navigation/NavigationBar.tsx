import { FC } from 'react';
import { useSelector } from 'react-redux';

import { NavigationBarProps } from '../../../types/interfaces';
import {
  Box,
  Typography,
  Divider,
  List,
  Drawer,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import CommonLinks from './CommonLinks';
import PublicLinks from './PublicLinks';
import PrivateLinks from './PrivateLinks';

import { selectRole } from '../../../redux/AuthSlice/AuthSlice';

import { USER_ROLES } from '../../../types/enums';
import { APP_TITLE } from '../../../constants/constants';

const MENU_WIDTH = {
  xs: '70%',
  sm: 240,
};

const NavigationBar: FC<NavigationBarProps> = ({
  isMenuOpen,
  handleMenuToggle,
}) => {
  const role: USER_ROLES | null = useSelector(selectRole);

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 10px',
        }}
      >
        <Typography variant="h6" color="secondary" sx={{ my: 2 }}>
          {APP_TITLE}
        </Typography>
        <IconButton
          onClick={handleMenuToggle}
          color="secondary"
          sx={{
            width: 'fit-content',
            height: 'fit-content',
            alignSelf: 'center',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <CommonLinks />
        {!role ? <PublicLinks /> : <PrivateLinks role={role} />}
      </List>
    </Box>
  );
  return (
    <nav>
      <Drawer
        container={() => window.document.body}
        variant="temporary"
        open={isMenuOpen}
        onClose={handleMenuToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: MENU_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default NavigationBar;
