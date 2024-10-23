import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import { Order } from '../../types/types';
import { getComparator } from '../../utils/tableUtils';
import UsersTableHead from './UsersTableHead';
import UsersTableToolbar from './UsersTableToolbar';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/reduxHooks';
import {
  selectLimit,
  selectOrder,
  selectOrderBy,
  selectPage,
  selectSelectedUserIds,
  selectUsers,
  setSelected,
} from '../../redux/UsersTableSlice/UsersTableSlice';
import { User } from '../../types/interfaces';
import { useGetUsersQuery } from '../../services/UserTableService';
import UserTablePagination from './UserTablePagination';
import { useTranslation } from 'react-i18next';

const UsersTable: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const rows: User[] = useSelector(selectUsers);
  const order: Order = useSelector(selectOrder);
  const orderBy: keyof User = useSelector(selectOrderBy);
  const selected = useSelector(selectSelectedUserIds);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  useGetUsersQuery({ page, limit });

  const handleClick = (_event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    dispatch(setSelected(newSelected));
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * limit - rows.length) : 0;

  const sortedRows = React.useMemo(
    () => [...rows].sort(getComparator(order, orderBy as never)),
    [order, orderBy, rows]
  );

  return (
    <Box
      sx={{
        width: {
          lg: '80%',
          md: '90%',
          xs: '100%',
        },
      }}
    >
      <Paper sx={{ width: '100%', mb: 2 }}>
        <UsersTableToolbar />
        <TableContainer>
          <Table size="medium">
            <UsersTableHead />
            <TableBody>
              {sortedRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" checked={isItemSelected} />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row">
                      {row.username}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">
                      {t(`adminPage:${row.status}`)}
                    </TableCell>
                    <TableCell align="left">
                      {t(`adminPage:${row.role}`)}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <UserTablePagination />
      </Paper>
    </Box>
  );
};

export default UsersTable;
