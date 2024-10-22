import { FC } from 'react';

import { Typography } from '@mui/material';

import { ChildrenOnlyProps } from '../types/interfaces';

const PageTitle: FC<ChildrenOnlyProps> = ({ children }) => {
  return (
    <Typography
      align="center"
      sx={(theme) => ({
        marginBottom: 1,
        [theme.breakpoints.down('sm')]: {
          fontSize: 28,
        },
        [theme.breakpoints.up('sm')]: {
          fontSize: 36,
        },
      })}
      variant="h2"
    >
      {children}
    </Typography>
  );
};

export default PageTitle;
