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
import { FormEventHandler, useRef, useState } from 'react';

const SignInPage = () => {
  const [error, setError] = useState<string>('');

  const { t } = useTranslation();
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(
      Array.from(new FormData(event.target as HTMLFormElement).entries())
    );
    console.log(checkboxRef.current?.checked);
  };

  return (
    <Container maxWidth="sm">
      <Stack sx={{ alignItems: 'center', gap: 1 }}>
        <LockPersonIcon fontSize="large" color="primary" />
        <Typography variant="h2">{t('header:SignIn')}</Typography>
        <Typography sx={{ marginBottom: 1 }} variant="body1">
          {t('auth:SignInWelcomeMsg')}
        </Typography>
        <form className="auth-form" onSubmit={onSubmit} noValidate>
          <CustomEmailField />
          <CustomPasswordField />
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
          />
          <CustomFormButton />
        </form>
      </Stack>
    </Container>
  );
};

export default SignInPage;
