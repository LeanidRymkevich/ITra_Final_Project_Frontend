import { AppBar, Container, Toolbar } from '@mui/material';
import ElevationScroll from './ElevationScroll';
import ScrollTop from '../UI/ScrollTop';
import { FC } from 'react';
import { ChildrenOnlyProps } from '../../types/interfaces';

export const SCROLL_ELEM_ID = 'scroll-to-top-anchor';

const CustomAppBar: FC<ChildrenOnlyProps> = ({ children }) => {
  return (
    <>
      <ElevationScroll>
        <AppBar
          color="default"
          sx={[
            (theme) => ({
              backgroundColor: theme.palette.primary.light,
              ...theme.applyStyles('dark', {
                backgroundColor: '#040407',
              }),
            }),
          ]}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ padding: '0 !important' }}>{children}</Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar sx={{ margin: 0 }} id={SCROLL_ELEM_ID} />
      <ScrollTop />
    </>
  );
};

export default CustomAppBar;
