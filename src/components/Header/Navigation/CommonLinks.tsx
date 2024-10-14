import { ListItem } from '@mui/material';
import { FC } from 'react';
import { PATHS } from '../../../types/enums';
import NavButton from './NavButton';
import { useTranslation } from 'react-i18next';

const CommonLinks: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <ListItem disablePadding>
        <NavButton href={PATHS.MAIN_PAGE}>{t('header:Main')}</NavButton>
      </ListItem>
      <ListItem disablePadding>
        <NavButton href={PATHS.SEARCH_RESULTS_PAGE}>
          {t('header:SearchResults')}
        </NavButton>
      </ListItem>
    </>
  );
};

export default CommonLinks;
