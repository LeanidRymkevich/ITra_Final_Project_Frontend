import { Link, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC } from 'react';
import { PAGE_NAMES, PATHS } from '../../../types/enums';

const PublicLinks: FC = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText
            primary={
              <Link variant="button" href={PATHS.SIGN_IN}>
                {PAGE_NAMES.SIGN_IN}
              </Link>
            }
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText
            primary={
              <Link variant="button" href={PATHS.SIGN_UP}>
                {PAGE_NAMES.SIGN_UP}
              </Link>
            }
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default PublicLinks;
