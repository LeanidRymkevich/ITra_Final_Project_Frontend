import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Alert, Stack } from '@mui/material';
import Container from '@mui/material/Container';

import PageTitle from '../components/PageTitle';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/reduxHooks';
import {
  selectError,
  setError,
} from '../redux/UsersTableSlice/UsersTableSlice';
import UsersTable from '../components/UsersTable/UsersTable';

const AdminPage: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const error = useSelector(selectError);

  const onErrorClose = (): void => {
    dispatch(setError(''));
  };

  return (
    <Container maxWidth="xl">
      <PageTitle>{t('header:AdminPage')}</PageTitle>
      <Stack alignItems="center">
        {error && (
          <Alert severity="error" onClose={onErrorClose}>
            {error}
          </Alert>
        )}
        <UsersTable />
      </Stack>
    </Container>
  );
};

export default AdminPage;
