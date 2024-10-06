import { FC } from 'react';
import { NavigationBarProps } from '../../../types/interfaces';
import { Box, Typography, Divider, List, Drawer } from '@mui/material';
import { APP_TITLE } from '../../../constants';
import { ROLES } from '../../../types/enums';
import CommonLinks from './commonLinks';

const NavigationBar: FC<NavigationBarProps> = ({
  isMenuOpen,
  handleMenuToggle,
}) => {
  // TODO Later change to getting authentication state, currently null for not authenticated user
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const role: ROLES | null = (() => null)();

  const drawer = (
    <Box onClick={handleMenuToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {APP_TITLE}
      </Typography>
      <Divider />
      <List>
        <CommonLinks />
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
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '70%', sm: 240 },
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default NavigationBar;
