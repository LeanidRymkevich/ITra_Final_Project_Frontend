import { Button, Collapse, List, ListItem } from '@mui/material';
import { FC, useState } from 'react';
import { PATHS, ROLES } from '../../../types/enums';
import NavButton from './NavButton';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const COLLAPSE_BTN_STYLES = {
  width: '100%',
  justifyContent: 'flex-start',
  gap: 1,
  fontSize: '1.25rem',
};

const PrivateLinks: FC<{ role: ROLES }> = ({ role }) => {
  const { t } = useTranslation();

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
          {t('header:Templates')}
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
              {t('header:TemplateEditor')}
            </NavButton>
          </ListItem>
          <ListItem disablePadding>
            <NavButton href={PATHS.TEMPLATE_FORMS_TAB}>
              {t('header:TemplateForms')}
            </NavButton>
          </ListItem>
          <ListItem disablePadding>
            <NavButton href={PATHS.TEMPLATE_SETTINGS_TAB}>
              {t('header:TemplateSettings')}
            </NavButton>
          </ListItem>
          <ListItem disablePadding>
            <NavButton href={PATHS.TEMPLATE_STATISTICS_TAB}>
              {t('header:TemplateStatistics')}
            </NavButton>
          </ListItem>
        </List>
      </Collapse>

      <ListItem disablePadding>
        <Button onClick={handleUserLinkClick} sx={COLLAPSE_BTN_STYLES}>
          {t('header:UserPage')}
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
              {t('header:UserTemplates')}
            </NavButton>
          </ListItem>
          <ListItem disablePadding>
            <NavButton href={PATHS.USER_FORMS_TAB}>
              {t('header:UserForms')}
            </NavButton>
          </ListItem>
        </List>
      </Collapse>

      {role === ROLES.ADMIN && (
        <ListItem disablePadding>
          <NavButton href={PATHS.ADMIN_PAGE}>{t('header:AdminPage')}</NavButton>
        </ListItem>
      )}
    </>
  );
};

export default PrivateLinks;
