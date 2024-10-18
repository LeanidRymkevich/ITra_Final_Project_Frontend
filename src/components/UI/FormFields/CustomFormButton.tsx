import { Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const CustomFormButton: FC = () => {
  const { t } = useTranslation();

  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2 }}
    >
      {t('header:SignIn')}
    </Button>
  );
};

export default CustomFormButton;
