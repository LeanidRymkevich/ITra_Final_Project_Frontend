import { AccountCircle } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';
import { FieldValues, Path } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CustomFieldProps } from '../../../types/interfaces';

const EMAIL_INPUT_ID = 'email-input-with-icon';

const CustomEmailField = <T extends FieldValues>({
  register,
  errors,
  isPending,
}: CustomFieldProps<T>) => {
  const { t } = useTranslation();

  return (
    <TextField
      id={EMAIL_INPUT_ID}
      label={t('auth:Email')}
      type="email"
      size="small"
      error={!!errors.email?.message}
      helperText={errors.email?.message && t('auth:EmailError')}
      fullWidth
      disabled={isPending}
      variant="outlined"
      {...register('email' as Path<T>)}
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

export default CustomEmailField;
