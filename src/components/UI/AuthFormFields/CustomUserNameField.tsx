import { useTranslation } from 'react-i18next';
import { FieldValues, Path } from 'react-hook-form';

import { TextField, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import { CustomFieldProps } from '../../../types/interfaces';

const INPUT_ID = 'username-input-with-icon';

const CustomUserNameField = <T extends FieldValues>({
  register,
  error,
  isLoading,
}: CustomFieldProps<T>) => {
  const { t } = useTranslation();

  return (
    <TextField
      id={INPUT_ID}
      label={t('auth:Username')}
      type="text"
      size="small"
      error={!!error}
      helperText={error && t('auth:UserNameError')}
      fullWidth
      disabled={isLoading}
      variant="outlined"
      {...register('username' as Path<T>)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment
              sx={{ margin: '0 0 0 8px', padding: '5px' }}
              position="start"
            >
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default CustomUserNameField;
