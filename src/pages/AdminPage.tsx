import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Alert, Backdrop, CircularProgress, Stack } from '@mui/material';
import Container from '@mui/material/Container';

import PageTitle from '../components/PageTitle';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/reduxHooks';
import {
  selectError,
  resetError,
  selectIsLoading,
} from '../redux/UsersTableSlice/UsersTableSlice';
import UsersTable from '../components/UsersTable/UsersTable';
import { StatusCodes } from 'http-status-codes';
import useSignOut from '../hooks/useSignOut';

const AdminPage: FC = () => {
  const { t } = useTranslation();
  const { signOutWithError } = useSignOut();

  const dispatch = useAppDispatch();
  const { msg, code } = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  if (code === StatusCodes.UNAUTHORIZED) {
    signOutWithError(msg);
  }

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
        {msg && (
          <Alert severity="error" onClose={onErrorClose}>
            {msg}
          </Alert>
        )}
        <UsersTable />
        {isLoading && (
          <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </Stack>
    </Container>
  );
};

export default AdminPage;
