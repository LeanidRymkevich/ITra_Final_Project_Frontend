import { AppBar, Container, Toolbar } from '@mui/material';
import ElevationScroll from './ElevationScroll';
import ScrollTop from './ScrollTop';
import { FC } from 'react';
import { ChildrenOnlyProps } from '../types/interfaces';

export const SCROLL_ELEM_ID = 'scroll-to-top-anchor';

const CustomAppBar: FC<ChildrenOnlyProps> = ({ children }) => {
  return (
    <>
      <ElevationScroll>
        <AppBar
          color="default"
          sx={[
            (theme) => ({
              backgroundColor: '#d8d8e2',
              ...theme.applyStyles('dark', {
                backgroundColor: '#040407',
              }),
            }),
          ]}
        >
          <Container>{children}</Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar id={SCROLL_ELEM_ID} />
      <ScrollTop />
    </>
  );
};

export default CustomAppBar;
