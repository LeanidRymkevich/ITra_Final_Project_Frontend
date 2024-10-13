import { Button, Collapse, List, ListItem } from '@mui/material';
import { FC, useState } from 'react';
import { PAGE_NAMES, PATHS, ROLES } from '../../../types/enums';
import NavButton from './NavButton';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const COLLAPSE_BTN_STYLES = {
  width: '100%',
  justifyContent: 'flex-start',
  gap: 1,
  fontSize: '1.25rem',
};

const PrivateLinks: FC<{ role: ROLES }> = ({ role }) => {
  const [isTemplateLinksListOpen, setIsTemplateLinksListOpen] = useState(false);
  const [isUserLinksListOpen, setIsUserLinksListOpen] = useState(false);

  const handleTemplateLinkClick = () =>
    setIsTemplateLinksListOpen(!isTemplateLinksListOpen);
  const handleUserLinkClick = () =>
    setIsUserLinksListOpen(!isUserLinksListOpen);

  return (
    <>
      <ListItem disablePadding>
        <Button onClick={handleTemplateLinkClick} sx={COLLAPSE_BTN_STYLES}>
          {PAGE_NAMES.TEMPLATE_PAGE}
          {isTemplateLinksListOpen ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </ListItem>
      <Collapse
        in={isTemplateLinksListOpen}
        timeout="auto"
        unmountOnExit
        sx={{ paddingLeft: 1 }}
      >
        <List component="div" disablePadding>
          <ListItem disablePadding>
            <NavButton href={PATHS.TEMPLATE_EDITOR_TAB}>
              {PAGE_NAMES.TEMPLATE_EDITOR_TAB}
            </NavButton>
          </ListItem>
          <ListItem disablePadding>
            <NavButton href={PATHS.TEMPLATE_FORMS_TAB}>
              {PAGE_NAMES.TEMPLATE_FORMS_TAB}
            </NavButton>
          </ListItem>
          <ListItem disablePadding>
            <NavButton href={PATHS.TEMPLATE_SETTINGS_TAB}>
              {PAGE_NAMES.TEMPLATE_SETTINGS_TAB}
            </NavButton>
          </ListItem>
          <ListItem disablePadding>
            <NavButton href={PATHS.TEMPLATE_STATISTICS_TAB}>
              {PAGE_NAMES.TEMPLATE_STATISTICS_TAB}
            </NavButton>
          </ListItem>
        </List>
      </Collapse>

      <ListItem disablePadding>
        <Button onClick={handleUserLinkClick} sx={COLLAPSE_BTN_STYLES}>
          {PAGE_NAMES.USER_PAGE}
          {isUserLinksListOpen ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </ListItem>
      <Collapse
        in={isUserLinksListOpen}
        timeout="auto"
        unmountOnExit
        sx={{ paddingLeft: 1 }}
      >
        <List component="div" disablePadding>
          <ListItem disablePadding>
            <NavButton href={PATHS.USER_TEMPLATES_TAB}>
              {PAGE_NAMES.USER_TEMPLATES_TAB}
            </NavButton>
          </ListItem>
          <ListItem disablePadding>
            <NavButton href={PATHS.USER_FORMS_TAB}>
              {PAGE_NAMES.USER_FORMS_TAB}
            </NavButton>
          </ListItem>
        </List>
      </Collapse>

      {role === ROLES.ADMIN && (
        <ListItem disablePadding>
          <NavButton href={PATHS.ADMIN_PAGE}>{PAGE_NAMES.ADMIN_PAGE}</NavButton>
        </ListItem>
      )}
    </>
  );
};

export default PrivateLinks;
