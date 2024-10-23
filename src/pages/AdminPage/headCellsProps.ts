import { UsersTableHeadCell } from '../../types/interfaces';

export const headCells: readonly UsersTableHeadCell[] = [
  // {
  //   id: 'id',
  //   numeric: true,
  //   disablePadding: true,
  //   label: 'id',
  // },
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
