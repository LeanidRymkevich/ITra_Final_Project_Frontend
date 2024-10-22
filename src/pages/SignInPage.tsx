import {
  Alert,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import CustomEmailField from '../components/UI/AuthFormFields/CustomEmailField';
import CustomPasswordField from '../components/UI/AuthFormFields/CustomPasswordField';
import CustomFormButton from '../components/UI/AuthFormFields/CustomFormButton';
import { useRef, useState } from 'react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import signInSchema, { signInFormData } from '../yup_schemes/signInSchema';
import { useAppDispatch } from '../hooks/reduxHooks';
import { User } from '../types/interfaces';
import { USER_ROLES, USER_STATUS } from '../types/enums';
import { setState } from '../redux/AuthSlice/AuthSlice';

const SignInPage = () => {
  const [error, setError] = useState<string>('');
  const isPending = false;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInFormData>({
    resolver: yupResolver(signInSchema),
  });

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: signInFormData) => {
    // TODO not sending request to the server yet
    const user: User = {
      id: '1',
      username: 'Oleg',
      email: data.email,
      status: USER_STATUS.ACTIVE,
      role: USER_ROLES.ADMIN,
    };

    //TODO if remember me chose save to LocalStorage
    dispatch(setState({ data: user, token: 'some token from server' }));
  };

  return (
    <Container maxWidth="sm">
      <Stack sx={{ alignItems: 'center', gap: 1 }}>
        <LockPersonIcon fontSize="large" color="primary" />
        <Typography
          align="center"
          sx={(theme) => ({
            marginBottom: 1,
            [theme.breakpoints.down('sm')]: {
              fontSize: 28,
            },
            [theme.breakpoints.up('sm')]: {
              fontSize: 36,
            },
          })}
          variant="h2"
        >
          {t('header:SignIn')}
        </Typography>
        <Typography align="center" sx={{ marginBottom: 1 }} variant="body1">
          {t('auth:SignInWelcomeMsg')}
        </Typography>
        <form
          className="auth-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <CustomEmailField
            {...{ register, error: errors.email?.message, isPending }}
          />
          <CustomPasswordField
            {...{
              register,
              error: errors.password?.message,
              isPending,
              labelI18nKey: 'Password',
              errorI18nKey: 'PasswordError',
              fieldName: 'password',
            }}
          />
          {error && (
            <Alert
              severity="error"
              onClose={() => {
                setError('');
              }}
            >
              {error}
            </Alert>
          )}
          <FormControlLabel
            control={<Checkbox inputRef={checkboxRef} />}
            label={t('auth:RememberMe')}
            disabled={isPending}
          />
          <CustomFormButton isPending={isPending} btnI18nKey="SignIn" />
        </form>
      </Stack>
    </Container>
  );
};

export default SignInPage;
