import { useTranslation } from 'react-i18next';
import { FieldValues, Path } from 'react-hook-form';

import EmailIcon from '@mui/icons-material/Email';
import { TextField, InputAdornment } from '@mui/material';

import { CustomFieldProps } from '../../../types/interfaces';

const EMAIL_INPUT_ID = 'email-input-with-icon';

const CustomEmailField = <T extends FieldValues>({
  register,
  error,
  isLoading,
}: CustomFieldProps<T>) => {
  const { t } = useTranslation();

  return (
    <TextField
      id={EMAIL_INPUT_ID}
      label={t('auth:Email')}
      type="email"
      size="small"
      error={!!error}
      helperText={error && t('auth:EmailError')}
      fullWidth
      disabled={isLoading}
      variant="outlined"
      {...register('email' as Path<T>)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment
              sx={{ margin: '0 0 0 8px', padding: '5px' }}
              position="start"
            >
              <EmailIcon fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default CustomEmailField;
