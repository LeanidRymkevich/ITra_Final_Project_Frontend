import { Toolbar, alpha, Typography } from '@mui/material';
import { EnhancedTableToolbarProps } from '../../types/interfaces';

const EnhancedTableToolbar = ({
  numSelected,
  tableName,
  buttonsBar,
}: EnhancedTableToolbarProps) => {
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
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" component="div">
          {tableName}
        </Typography>
      )}
      {numSelected > 0 && buttonsBar}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
