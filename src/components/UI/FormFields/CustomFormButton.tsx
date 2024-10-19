import { LoadingButton } from '@mui/lab';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LoginIcon from '@mui/icons-material/Login';
import { CustomFormButtonProps } from '../../../types/interfaces';

const CustomFormButton: FC<CustomFormButtonProps> = ({ isPending }) => {
  const { t } = useTranslation();

  return (
    <LoadingButton
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2 }}
      loading={isPending}
      loadingPosition="end"
      endIcon={<LoginIcon />}
    >
      {t('header:SignIn')}
    </LoadingButton>
  );
};

export default CustomFormButton;
