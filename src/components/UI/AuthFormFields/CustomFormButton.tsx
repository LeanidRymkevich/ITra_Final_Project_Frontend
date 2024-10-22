import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoadingButton } from '@mui/lab';
import LoginIcon from '@mui/icons-material/Login';

import { CustomFormButtonProps } from '../../../types/interfaces';

const CustomFormButton: FC<CustomFormButtonProps> = ({
  isLoading,
  btnI18nKey,
  onClick,
  type,
}) => {
  const { t } = useTranslation();

  return (
    <LoadingButton
      onClick={onClick}
      type={type || 'submit'}
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      loading={isLoading}
      loadingPosition="end"
      endIcon={<LoginIcon />}
    >
      {t(`header:${btnI18nKey}`)}
    </LoadingButton>
  );
};

export default CustomFormButton;
