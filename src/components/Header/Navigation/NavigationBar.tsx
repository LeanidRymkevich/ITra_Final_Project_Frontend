import { FC } from 'react';
import { NavigationBarProps } from '../../../types/interfaces';
import {
  Box,
  Typography,
  Divider,
  List,
  Drawer,
  IconButton,
} from '@mui/material';
import { APP_TITLE } from '../../../constants';
import { ROLES } from '../../../types/enums';
import CommonLinks from './CommonLinks';
import CloseIcon from '@mui/icons-material/Close';
import PublicLinks from './PublicLinks';
import PrivateLinks from './PrivateLinks';

const MENU_WIDTH = {
  xs: '70%',
  sm: 240,
};

const NavigationBar: FC<NavigationBarProps> = ({
  isMenuOpen,
  handleMenuToggle,
}) => {
  // TODO Later change to getting authentication state, currently null for not authenticated user
  const role: ROLES | null = (() => ROLES.ADMIN)();

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