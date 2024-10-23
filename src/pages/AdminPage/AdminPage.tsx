import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack } from '@mui/material';
import Container from '@mui/material/Container';

import PageTitle from '../../components/PageTitle';
import AdminsToolsBar from '../../components/AdminToolsBar';
import EnhancedTable from '../../components/UsersTable/EnhancedTable';
import { rows } from './testData';
import { headCells } from './headCellsProps';

const AdminPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <PageTitle>{t('header:AdminPage')}</PageTitle>
      <Stack>
        <EnhancedTable
          {...{
            rows,
            tableName: 'Users',
            buttonsBar: <AdminsToolsBar />,
            headCells,
          }}
        />
      </Stack>
    </Container>
  );
};

export default AdminPage;
