import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Alert, Stack } from '@mui/material';
import Container from '@mui/material/Container';

import PageTitle from '../components/PageTitle';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/reduxHooks';
import {
  selectError,
  resetError,
} from '../redux/UsersTableSlice/UsersTableSlice';
import UsersTable from '../components/UsersTable/UsersTable';

const AdminPage: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const error = useSelector(selectError).msg;

  const onErrorClose = (): void => {
    dispatch(resetError());
  };

  return (
    <Container maxWidth="xl">
      <PageTitle>{t('header:AdminPage')}</PageTitle>
      <Stack
        sx={{
          width: {
            lg: '80%',
            md: '90%',
            xs: '100%',
          },
          margin: '0 auto',
        }}
        alignItems="center"
        gap={1}
      >
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
