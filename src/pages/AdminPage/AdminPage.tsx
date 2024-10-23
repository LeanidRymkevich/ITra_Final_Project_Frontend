import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack } from '@mui/material';
import Container from '@mui/material/Container';

import PageTitle from '../../components/PageTitle';
import { useGetUsersQuery } from '../../services/UserTableService';
// import AdminsToolsBar from '../../components/AdminToolsBar';
// import EnhancedTable from '../../components/UsersTable/EnhancedTable';
// import { rows } from './testData';
// import { headCells } from './headCellsProps';

const AdminPage: FC = () => {
  const { t } = useTranslation();
  const [a, setA] = useState(false);

  const { data, isLoading, error } = useGetUsersQuery({ limit: 3, page: 1 });

  useEffect(() => {
    setA(isLoading);
  }, [isLoading]);

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
        {a! ? <div>Loading...</div> : JSON.stringify(data, null, 2)}
      </Stack>
    </Container>
  );
};

export default AdminPage;
