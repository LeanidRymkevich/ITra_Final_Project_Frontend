import { TablePagination } from '@mui/material';
import { useAppDispatch } from '../../hooks/reduxHooks';
import {
  setPage,
  setLimit,
  selectLimit,
  selectPage,
  selectTotal,
} from '../../redux/UsersTableSlice/UsersTableSlice';
import { useSelector } from 'react-redux';

const UserTablePagination = () => {
  const dispatch = useAppDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const total = useSelector(selectTotal);

  const handleChangePage = (_event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLimit(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={total}
      rowsPerPage={limit}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeLimit}
    />
  );
};

export default UserTablePagination;
