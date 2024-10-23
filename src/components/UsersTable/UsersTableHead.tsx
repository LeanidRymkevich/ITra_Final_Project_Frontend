import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
} from '@mui/material';
import { User } from '../../types/interfaces';
import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectOrder,
  selectOrderBy,
  selectSelectedUserIds,
  setSelected,
  setOrderBy,
  setOrder,
} from '../../redux/UsersTableSlice/UsersTableSlice';
import { Order } from '../../types/types';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useTranslation } from 'react-i18next';

const ids: (keyof User)[] = ['username', 'email', 'role', 'status'];

const UsersTableHead = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const rows: User[] = useSelector(selectUsers);
  const order: Order = useSelector(selectOrder);
  const orderBy: keyof User = useSelector(selectOrderBy);
  const numSelected = useSelector(selectSelectedUserIds).length;

  const rowCount = rows.length;

  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected: User['id'][] = rows.map((n) => n.id);
      dispatch(setSelected(newSelected));
      return;
    }
    dispatch(setSelected([]));
  };

  const createSortHandler = (property: keyof User) => () => {
    const isAsc = orderBy === property && order === 'asc';
    dispatch(setOrder(isAsc ? 'desc' : 'asc'));
    dispatch(setOrderBy(property));
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {ids.map((id) => (
          <TableCell
            key={id}
            align="left"
            padding="normal"
            sortDirection={orderBy === id ? order : false}
          >
            <TableSortLabel
              active={orderBy === id}
              direction={orderBy === id ? order : 'asc'}
              onClick={createSortHandler(id)}
            >
              {t(`adminPage:${id}`)}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default UsersTableHead;
