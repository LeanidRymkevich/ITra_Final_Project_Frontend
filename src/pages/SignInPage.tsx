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
import CustomEmailField from '../components/UI/FormFields/CustomEmailField';
import CustomPasswordField from '../components/UI/FormFields/CustomPasswordField';
import CustomFormButton from '../components/UI/FormFields/CustomFormButton';
import { useRef, useState } from 'react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import signInSchema, { signInFormData } from '../yup_schemes/signInSchema';

const SignInPage = () => {
  const [error, setError] = useState<string>('');
  const isPending = false;
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInFormData>({
    resolver: yupResolver(signInSchema),
  });

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: signInFormData) => {
    console.log('submitted');
    console.log(data);
    console.log(checkboxRef.current?.checked); // TODO use to decide store user data in LocalStorage or not
  };

  return (
    <Container maxWidth="sm">
      <Stack sx={{ alignItems: 'center', gap: 1 }}>
        <LockPersonIcon fontSize="large" color="primary" />
        <Typography variant="h2">{t('header:SignIn')}</Typography>
        <Typography sx={{ marginBottom: 1 }} variant="body1">
          {t('auth:SignInWelcomeMsg')}
        </Typography>
        <form
          className="auth-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <CustomEmailField {...{ register, errors, isPending }} />
          <CustomPasswordField {...{ register, errors, isPending }} />
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
          <CustomFormButton isPending={isPending} />
        </form>
      </Stack>
    </Container>
  );
};

export default SignInPage;
