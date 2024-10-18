import { AccountCircle } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const CustomEmailField: FC = () => {
  const { t } = useTranslation();

  return (
    <TextField
      id="input-with-icon-textfield"
      label={t('auth:Email')}
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
    />
  );
};

export default CustomEmailField;
