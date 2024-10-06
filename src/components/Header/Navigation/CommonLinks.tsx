import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PAGE_NAMES, PATHS } from '../../../types/enums';

const CommonLinks: FC = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText
            primary={
              <NavLink to={PATHS.MAIN_PAGE}>{PAGE_NAMES.MAIN_PAGE}</NavLink>
            }
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText
            primary={
              <NavLink to={PATHS.SEARCH_RESULTS_PAGE}>
                {PAGE_NAMES.SEARCH_RESULTS_PAGE}
              </NavLink>
            }
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default CommonLinks;
