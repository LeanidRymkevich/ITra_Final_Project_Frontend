import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import { useNavigate } from 'react-router-dom';

import {
  Alert,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';

import CustomEmailField from '../components/UI/AuthFormFields/CustomEmailField';
import CustomPasswordField from '../components/UI/AuthFormFields/CustomPasswordField';
import CustomFormButton from '../components/UI/AuthFormFields/CustomFormButton';

import signInSchema, { signInFormData } from '../yup_schemes/signInSchema';

import { useAppDispatch } from '../hooks/reduxHooks';
import { setState } from '../redux/AuthSlice/AuthSlice';
import { useSignInMutation } from '../services/AuthService';

import { saveAuthStateToLS } from '../utils/localStorageUtils';

import { ServerResponseError } from '../types/interfaces';
import { PATHS } from '../types/enums';

const SignInPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [signIn, { isLoading }] = useSignInMutation();

  const [error, setError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInFormData>({
    resolver: yupResolver(signInSchema),
  });

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (data: signInFormData): Promise<void> => {
    try {
      const resp = await signIn(data).unwrap();
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
            {...{ register, error: errors.email?.message, isLoading }}
          />
          <CustomPasswordField
            {...{
              register,
              error: errors.password?.message,
              isLoading,
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
            disabled={isLoading}
          />
          <CustomFormButton isLoading={isLoading} btnI18nKey="SignIn" />
          <CustomFormButton
            type="button"
            isLoading={isLoading}
            btnI18nKey="GoToSignUp"
            onClick={() => navigate(PATHS.SIGN_UP)}
          />
        </form>
      </Stack>
    </Container>
  );
};

export default SignInPage;
