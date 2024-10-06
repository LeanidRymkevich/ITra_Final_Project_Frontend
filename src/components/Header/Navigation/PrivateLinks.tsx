import { Link, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC } from 'react';
import { PAGE_NAMES, PATHS, ROLES } from '../../../types/enums';

const PrivateLinks: FC<{ role: ROLES }> = ({ role }) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText
            primary={
              <Link variant="button" href={PATHS.TEMPLATE_PAGE}>
                {PAGE_NAMES.TEMPLATE_PAGE}
              </Link>
            }
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText
            primary={
              <Link variant="button" href={PATHS.USER_PAGE}>
                {PAGE_NAMES.USER_PAGE}
              </Link>
            }
          />
        </ListItemButton>
      </ListItem>
      {role === ROLES.ADMIN && (
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText
              primary={
                <Link variant="button" href={PATHS.ADMIN_PAGE}>
                  {PAGE_NAMES.ADMIN_PAGE}
                </Link>
              }
            />
          </ListItemButton>
        </ListItem>
      )}
    </>
  );
};

export default PrivateLinks;
