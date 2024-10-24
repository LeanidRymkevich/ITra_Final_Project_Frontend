import { FC } from 'react';

import { Box, IconButton, Tooltip } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/reduxHooks';
import {
  deleteOneUser,
  selectSelectedUserIds,
  setError,
  setIsLoading,
  updateOneUser,
} from '../../redux/UsersTableSlice/UsersTableSlice';
import {
  useUpdateUserMutation,
  useDeleteUserMutation,
} from '../../services/UserTableService';
import { USER_ROLES, USER_STATUS } from '../../types/enums';
import { ServerResponseError, User } from '../../types/interfaces';

const UsersTableButtonsBar: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const selected = useSelector(selectSelectedUserIds);

  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const updateUsers = async (
    fields: Partial<Omit<User, 'id'>>
  ): Promise<void> => {
    dispatch(setIsLoading(true));
    await Promise.all(
      selected.map(async (id: number): Promise<void> => {
        try {
          const resp = await updateUser({ id, ...fields }).unwrap();
          dispatch(updateOneUser({ id, data: resp.data }));
        } catch (err) {
          const { data, status } = err as ServerResponseError;
          dispatch(setError({ msg: data.error, code: status }));
        }
      })
    );
    dispatch(setIsLoading(false));
  };

  const deleteUsers = async (): Promise<void> => {
    dispatch(setIsLoading(true));
    await Promise.all(
      selected.map(async (id: number): Promise<void> => {
        try {
          await deleteUser(id).unwrap();
          dispatch(deleteOneUser(id));
        } catch (err) {
          const { data, status } = err as ServerResponseError;
          dispatch(setError({ msg: data.error, code: status }));
        }
      })
    );
    dispatch(setIsLoading(false));
  };

  const blockUsers = (): Promise<void> =>
    updateUsers({ status: USER_STATUS.BLOCKED });
  const unBlockUsers = (): Promise<void> =>
    updateUsers({ status: USER_STATUS.ACTIVE });
  const addUsersToAdmins = (): Promise<void> =>
    updateUsers({ role: USER_ROLES.ADMIN });
  const removeUsersFromAdmins = (): Promise<void> =>
    updateUsers({ role: USER_ROLES.USER });

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
      }}
    >
      <Tooltip title={t('adminPage:block')}>
        <IconButton onClick={blockUsers}>
          <LockPersonIcon color="warning" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('adminPage:unblock')}>
        <IconButton onClick={unBlockUsers}>
          <NoEncryptionIcon color="success" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('adminPage:addToAdmins')}>
        <IconButton onClick={addUsersToAdmins}>
          <PersonAddAlt1Icon color="success" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('adminPage:removeFromAdmins')}>
        <IconButton onClick={removeUsersFromAdmins}>
          <PersonAddDisabledIcon color="warning" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('adminPage:delete')}>
        <IconButton onClick={deleteUsers}>
          <DeleteIcon color="error" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default UsersTableButtonsBar;
