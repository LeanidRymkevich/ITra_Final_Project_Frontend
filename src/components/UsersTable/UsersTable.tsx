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
import UsersTableHead from './UsersTableHead';
import UsersTableToolbar from './UsersTableToolbar';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/reduxHooks';
import {
  selectLimit,
  selectOrder,
  selectOrderBy,
  selectPage,
  selectSelectedUserIds,
  selectUsers,
  setError,
  setIsLoading,
  setSelected,
  setTotal,
  setUsers,
} from '../../redux/UsersTableSlice/UsersTableSlice';
import { User, ServerResponseError } from '../../types/interfaces';
import { useGetUsersQuery } from '../../services/UserTableService';
import UserTablePagination from './UserTablePagination';
import { useTranslation } from 'react-i18next';

const MUI_DEFAULT_ROW_HEIGHT = 53;

const UsersTable: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const rows = useSelector(selectUsers);
  const order: Order = useSelector(selectOrder);
  const orderBy: keyof User = useSelector(selectOrderBy);
  const selected = useSelector(selectSelectedUserIds);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const { data, isLoading, error } = useGetUsersQuery({
    page,
    limit,
  });

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
    if (data) {
      dispatch(setUsers(data.data.users));
      dispatch(setTotal(data.data.total));
    }

    if (error) {
      const { data, status } = error as ServerResponseError;
      dispatch(setError({ msg: data.error, code: status }));
    }
  }, [data, dispatch, isLoading, error]);

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
  const emptyRows = limit - rows.length;

  return (
    <Box width="100%">
      <Paper sx={{ width: '100%', mb: 2 }}>
        <UsersTableToolbar />
        <TableContainer>
          <Table size="medium">
            <UsersTableHead />
            <TableBody>
              {rows.map((row, index) => {
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
                    height: MUI_DEFAULT_ROW_HEIGHT * emptyRows,
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
