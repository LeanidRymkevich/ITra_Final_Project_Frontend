import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, Path } from 'react-hook-form';

import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton, TextField } from '@mui/material';

import { CustomPasswordProps } from '../../../types/interfaces';

const PASSWORD_INPUT_ID = 'input-with-icon';

const CustomPasswordField = <T extends FieldValues>({
  register,
  error,
  isLoading,
  labelI18nKey,
  errorI18nKey,
  fieldName,
}: CustomPasswordProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      id={`${fieldName}-${PASSWORD_INPUT_ID}`}
      label={t(`auth:${labelI18nKey}`)}
      size="small"
      error={!!error}
      helperText={error && t(`auth:${errorI18nKey}`)}
      fullWidth
      disabled={isLoading}
      variant="outlined"
      {...register(fieldName as Path<T>)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                edge="end"
                size="small"
                disabled={isLoading}
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
