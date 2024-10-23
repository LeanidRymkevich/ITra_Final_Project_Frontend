import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack } from '@mui/material';
import Container from '@mui/material/Container';

import PageTitle from '../../components/PageTitle';
import { useUpdateUserMutation } from '../../services/UserTableService';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectUsers,
} from '../../redux/UsersTableSlice/UsersTableSlice';
import { USER_ROLES, USER_STATUS } from '../../types/enums';
// import AdminsToolsBar from '../../components/AdminToolsBar';
// import EnhancedTable from '../../components/UsersTable/EnhancedTable';
// import { rows } from './testData';
// import { headCells } from './headCellsProps';

const AdminPage: FC = () => {
  const { t } = useTranslation();
  const [updateUser] = useUpdateUserMutation();
  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsers);

  return (
    <Container maxWidth="xl">
      <PageTitle>{t('header:AdminPage')}</PageTitle>
      <Stack>
        {/* <EnhancedTable
          {...{
            rows,
            tableName: 'Users',
            buttonsBar: <AdminsToolsBar />,
            headCells,
          }}
        /> */}
        <button
          onClick={() => {
            updateUser({
              id: 8,
              username: 'Igor Smotov',
              email: 'pottov@gmail.com',
              role: USER_ROLES.ADMIN,
              status: USER_STATUS.ACTIVE,
            });
          }}
        >
          Update User # 7
        </button>
        <h1>{`${isLoading}`}</h1>
        <div>{JSON.stringify(users, null, 2)}</div>
      </Stack>
    </Container>
  );
};

export default AdminPage;
