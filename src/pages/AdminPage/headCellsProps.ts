import { EnhancedTableHeadCell, User } from '../../types/interfaces';

export const headCells: readonly EnhancedTableHeadCell<User>[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'id',
  },
  {
    id: 'username',
    numeric: false,
    disablePadding: false,
    label: 'Username',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: false,
    label: 'Role',
  },
];
