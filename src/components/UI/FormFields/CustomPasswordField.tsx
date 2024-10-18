import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import { FC, FocusEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'validator';

const CustomPasswordField: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>('');
  const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const value: string = event.target.value;
    if (isEmpty(value)) {
      setError(t('auth:PasswordError'));
      return;
    }
    setError('');
  };

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      id="password-input-with-icon"
      label={t('auth:Password')}
      name="password"
      size="small"
      onBlur={onBlur}
      error={!!error}
      helperText={error}
      fullWidth
      variant="outlined"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                size="small"
              >
                {showPassword ? (
                  <VisibilityOff fontSize="inherit" />
                ) : (
                  <Visibility fontSize="inherit" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default CustomPasswordField;
