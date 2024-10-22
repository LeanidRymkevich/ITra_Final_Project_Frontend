import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import PageTitle from '../components/PageTitle';

const AdminPage = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <PageTitle>{t('header:AdminPage')}</PageTitle>
    </Container>
  );
};

export default AdminPage;
