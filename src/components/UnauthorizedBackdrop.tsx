import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  selectUnauthorizedError,
  setUnauthorizedError,
} from '../redux/AuthSlice/AuthSlice';
import { useAppDispatch } from '../hooks/reduxHooks';

import { Backdrop, Button, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const UnauthorizedBackdrop: FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  const dispatch = useAppDispatch();
  const error: string = useSelector(selectUnauthorizedError);

  const onBtnClick = () => {
    setOpen(false);
    dispatch(setUnauthorizedError(''));
  };

  return (
    <Backdrop
      sx={(theme) => ({
        color: theme.palette.error.dark,
        zIndex: theme.zIndex.drawer + 1,
        opacity: 0.8,
      })}
      open={open}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
        gap={2}
      >
        <Typography variant="h5">{t('auth:UnauthorizedErrorTitle')}</Typography>
        <Typography variant="h6">
          {t('auth:UnauthorizedErrorDescription')} {error}
        </Typography>
        <Button variant="contained" color="error" onClick={onBtnClick}>
          {t('auth:UnauthorizedErrorBtn')}
        </Button>
      </Stack>
    </Backdrop>
  );
};

export default UnauthorizedBackdrop;
