import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Container,
  Stack,
  Typography,
  Alert,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';

import CustomEmailField from '../components/UI/AuthFormFields/CustomEmailField';
import CustomFormButton from '../components/UI/AuthFormFields/CustomFormButton';
import CustomPasswordField from '../components/UI/AuthFormFields/CustomPasswordField';
import CustomUserNameField from '../components/UI/AuthFormFields/CustomUserNameField';

import { useAppDispatch } from '../hooks/reduxHooks';
import { setState } from '../redux/AuthSlice/AuthSlice';
import { useSignUpMutation } from '../services/AuthService';

import { saveAuthStateToLS } from '../utils/localStorageUtils';

import signUpSchema, { signUpFormData } from '../yup_schemes/signUpSchema';

import { ServerResponseError } from '../types/interfaces';

const SignUpPage = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const [signUp, { isLoading }] = useSignUpMutation();

  const [error, setError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (data: signUpFormData): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { repeatPassword, ...payload } = data;

    try {
      const resp = await signUp(payload).unwrap();
      if (checkboxRef.current?.checked) saveAuthStateToLS(resp);
      dispatch(setState(resp));
    } catch (err) {
      const { data } = err as ServerResponseError;
      setError(data.error);
    }
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
          {t('header:SignUp')}
        </Typography>
        <Typography align="center" sx={{ marginBottom: 1 }} variant="body1">
          {t('auth:SignUpWelcomeMsg')}
        </Typography>
        <form
          className="auth-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <CustomUserNameField
            {...{ register, error: errors.username?.message, isLoading }}
          />
          <CustomEmailField
            {...{ register, error: errors.email?.message, isLoading }}
          />
          <CustomPasswordField
            {...{
              register,
              error: errors.password?.message,
              isLoading,
              labelI18nKey: 'Password',
              errorI18nKey: 'SignUpPasswordError',
              fieldName: 'password',
            }}
          />
          <CustomPasswordField
            {...{
              register,
              error: errors.repeatPassword?.message,
              isLoading,
              labelI18nKey: 'RepeatPassword',
              errorI18nKey: 'SignUpPasswordError',
              fieldName: 'repeatPassword',
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
            disabled={isLoading}
          />
          <CustomFormButton isLoading={isLoading} btnI18nKey="SignUp" />
        </form>
      </Stack>
    </Container>
  );
};

export default SignUpPage;
