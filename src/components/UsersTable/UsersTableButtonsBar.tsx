import { FC } from 'react';

import { Box, IconButton, Tooltip } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

const UsersTableButtonsBar: FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
      }}
    >
      <Tooltip title={t('adminPage:block')}>
        <IconButton onClick={() => console.log('Block')}>
          <LockPersonIcon color="warning" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('adminPage:unblock')}>
        <IconButton onClick={() => console.log('Unblock')}>
          <NoEncryptionIcon color="success" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('adminPage:addToAdmins')}>
        <IconButton onClick={() => console.log('Add to admins')}>
          <PersonAddAlt1Icon color="success" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('adminPage:removeFromAdmins')}>
        <IconButton onClick={() => console.log('Remove from admins')}>
          <PersonAddDisabledIcon color="warning" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('adminPage:delete')}>
        <IconButton onClick={() => console.log('Delete')}>
          <DeleteIcon color="error" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default UsersTableButtonsBar;
