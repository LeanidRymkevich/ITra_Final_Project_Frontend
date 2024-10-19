import { TextField, InputAdornment } from '@mui/material';
import { FieldValues, Path } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CustomFieldProps } from '../../../types/interfaces';
import { AccountCircle } from '@mui/icons-material';

const INPUT_ID = 'username-input-with-icon';

const CustomUserNameField = <T extends FieldValues>({
  register,
  error,
  isPending,
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
      disabled={isPending}
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
