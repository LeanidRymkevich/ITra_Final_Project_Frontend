import { ListItem } from '@mui/material';
import { FC } from 'react';
import { PAGE_NAMES, PATHS } from '../../../types/enums';
import NavButton from './NavButton';

const PublicLinks: FC = () => {
  return (
    <>
      <ListItem disablePadding>
        <NavButton href={PATHS.SIGN_IN}>{PAGE_NAMES.SIGN_IN}</NavButton>
      </ListItem>
      <ListItem disablePadding>
        <NavButton href={PATHS.SIGN_UP}>{PAGE_NAMES.SIGN_UP}</NavButton>
      </ListItem>
    </>
  );
};

export default PublicLinks;
