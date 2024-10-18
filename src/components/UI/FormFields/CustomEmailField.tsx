import { AccountCircle } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';
import { FC, FocusEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isEmail, isEmpty } from 'validator';

const CustomEmailField: FC = () => {
  const { t } = useTranslation();

  const [error, setError] = useState<string>('');

  const onBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const value: string = event.target.value;
    if (isEmpty(value) || isEmail(value)) {
      setError(t('auth:EmailError'));
      return;
    }
    setError('');
  };

  return (
    <TextField
      id="email-input-with-icon"
      label={t('auth:Email')}
      name="email"
      type="email"
      size="small"
      onBlur={onBlur}
      error={!!error}
      helperText={error}
      fullWidth
      variant="outlined"
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
