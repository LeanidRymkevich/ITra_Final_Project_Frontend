import { FC } from 'react';

import { Box, IconButton, Tooltip } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import DeleteIcon from '@mui/icons-material/Delete';

const AdminsToolsBar: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
      }}
    >
      <Tooltip title="Block">
        <IconButton onClick={() => console.log('Block')}>
          <LockPersonIcon color="warning" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Unblock">
        <IconButton onClick={() => console.log('Unblock')}>
          <NoEncryptionIcon color="success" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Add to admins">
        <IconButton onClick={() => console.log('Add to admins')}>
          <PersonAddAlt1Icon color="success" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Remove from admins">
        <IconButton onClick={() => console.log('Remove from admins')}>
          <PersonAddDisabledIcon color="warning" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton onClick={() => console.log('Delete')}>
          <DeleteIcon color="error" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default AdminsToolsBar;
