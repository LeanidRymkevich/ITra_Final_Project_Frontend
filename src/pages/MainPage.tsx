import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';

import PageTitle from '../components/PageTitle';
import { List, ListItem, Stack, Typography } from '@mui/material';

const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Stack gap={1} sx={{ margin: '0 auto' }}>
        <PageTitle>{t('header:Main')}</PageTitle>
        <Typography variant="h4">{t('mainPage:Greetings')}</Typography>
        <Typography variant="body1">
          {t('mainPage:FeaturesListTitle')}:
        </Typography>
        <List>
          <ListItem>{t('mainPage:Feature1')}</ListItem>
          <ListItem>{t('mainPage:Feature2')}</ListItem>
          <ListItem>{t('mainPage:Feature3')}</ListItem>
          <ListItem>{t('mainPage:Feature4')}</ListItem>
          <ListItem>{t('mainPage:Feature5')}</ListItem>
          <ListItem>{t('mainPage:Feature6')}</ListItem>
        </List>
        <Typography variant="body1">{t('mainPage:AddInfo')}:</Typography>
        <List>
          <ListItem>{t('mainPage:enterEmail')}</ListItem>
          <ListItem>{t('mainPage:enterPassword')}</ListItem>
        </List>
      </Stack>
    </Container>
  );
};

export default MainPage;
