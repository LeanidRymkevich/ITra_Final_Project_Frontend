import {
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import CustomEmailField from '../components/UI/FormFields/CustomEmailField';
import CustomPasswordField from '../components/UI/FormFields/CustomPasswordField';
import CustomFormButton from '../components/UI/FormFields/CustomFormButton';

const SignInPage = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <LockPersonIcon fontSize="large" color="primary" />
      <Typography variant="h2">{t('header:SignIn')}</Typography>
      <Typography variant="body1">{t('auth:SignInWelcomeMsg')}</Typography>
      <form>
        <CustomEmailField />
        <CustomPasswordField />
        <FormControlLabel control={<Checkbox />} label={t('auth:RememberMe')} />
        <CustomFormButton />
      </form>
    </Container>
  );
};

export default SignInPage;
