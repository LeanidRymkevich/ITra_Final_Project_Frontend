import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ListItem } from '@mui/material';

import NavButton from './NavButton';

import { PATHS } from '../../../types/enums';

const PublicLinks: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <ListItem disablePadding>
        <NavButton href={PATHS.SIGN_IN}>{t('header:SignIn')}</NavButton>
      </ListItem>
      <ListItem disablePadding>
        <NavButton href={PATHS.SIGN_UP}>{t('header:SignUp')}</NavButton>
      </ListItem>
    </>
  );
};

export default PublicLinks;
