import { ListItem } from '@mui/material';
import { FC } from 'react';
import { PAGE_NAMES, PATHS } from '../../../types/enums';
import NavButton from './NavButton';

const CommonLinks: FC = () => {
  return (
    <>
      <ListItem disablePadding>
        <NavButton href={PATHS.MAIN_PAGE}>{PAGE_NAMES.MAIN_PAGE}</NavButton>
      </ListItem>
      <ListItem disablePadding>
        <NavButton href={PATHS.SEARCH_RESULTS_PAGE}>
          {PAGE_NAMES.SEARCH_RESULTS_PAGE}
        </NavButton>
      </ListItem>
    </>
  );
};

export default CommonLinks;
