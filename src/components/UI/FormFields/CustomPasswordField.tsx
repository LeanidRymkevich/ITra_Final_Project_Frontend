import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomFieldProps } from '../../../types/interfaces';
import { FieldValues, Path } from 'react-hook-form';

const PASSWORD_INPUT_ID = 'password-input-with-icon';

const CustomPasswordField = <T extends FieldValues>({
  register,
  errors,
  isPending,
}: CustomFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      id={PASSWORD_INPUT_ID}
      label={t('auth:Password')}
      size="small"
      error={!!errors.password?.message}
      helperText={errors.password?.message && t('auth:PasswordError')}
      fullWidth
      disabled={isPending}
      variant="outlined"
      {...register('password' as Path<T>)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                edge="end"
                size="small"
                disabled={isPending}
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
