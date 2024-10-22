import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoadingButton } from '@mui/lab';
import LoginIcon from '@mui/icons-material/Login';

import { CustomFormButtonProps } from '../../../types/interfaces';

const CustomFormButton: FC<CustomFormButtonProps> = ({
  isPending,
  btnI18nKey,
}) => {
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
      {t(`header:${btnI18nKey}`)}
    </LoadingButton>
  );
};

export default CustomFormButton;
