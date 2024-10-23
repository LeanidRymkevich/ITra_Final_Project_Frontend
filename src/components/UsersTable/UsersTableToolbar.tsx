import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Toolbar, alpha, Typography } from '@mui/material';

import { selectSelectedUserIds } from '../../redux/UsersTableSlice/UsersTableSlice';
import UsersTableButtonsBar from './UsersTableButtonsBar';

const UsersTableToolbar = () => {
  const { t } = useTranslation();

  const numSelected = useSelector(selectSelectedUserIds).length;

  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          justifyContent: {
            sm: 'space-between',
            xs: 'center',
          },
          flexWrap: 'wrap',
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subtitle1" component="div">
          {numSelected} {t('adminPage:selected')}
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" component="div">
          {t('adminPage:TableName')}
        </Typography>
      )}
      {numSelected > 0 && <UsersTableButtonsBar />}
    </Toolbar>
  );
};

export default UsersTableToolbar;
