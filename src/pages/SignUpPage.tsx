import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  Stack,
  Typography,
  Alert,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CustomEmailField from '../components/UI/AuthFormFields/CustomEmailField';
import CustomFormButton from '../components/UI/AuthFormFields/CustomFormButton';
import CustomPasswordField from '../components/UI/AuthFormFields/CustomPasswordField';
import signUpSchema, { signUpFormData } from '../yup_schemes/signUpSchema';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import CustomUserNameField from '../components/UI/AuthFormFields/CustomUserNameField';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setState } from '../redux/AuthSlice/AuthSlice';
import { USER_STATUS, USER_ROLES } from '../types/enums';
import { User } from '../types/interfaces';

const SignUpPage = () => {
  const [error, setError] = useState<string>('');
  const isPending = false;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: signUpFormData) => {
    // TODO not sending request to the server yet
    const user: User = {
      id: '1',
      username: data.username,
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
            {...{ register, error: errors.username?.message, isPending }}
          />
          <CustomEmailField
            {...{ register, error: errors.email?.message, isPending }}
          />
          <CustomPasswordField
            {...{
              register,
              error: errors.password?.message,
              isPending,
              labelI18nKey: 'Password',
              errorI18nKey: 'SignUpPasswordError',
              fieldName: 'password',
            }}
          />
          <CustomPasswordField
            {...{
              register,
              error: errors.repeatPassword?.message,
              isPending,
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
            disabled={isPending}
          />
          <CustomFormButton isPending={isPending} btnI18nKey="SignUp" />
        </form>
      </Stack>
    </Container>
  );
};

export default SignUpPage;
