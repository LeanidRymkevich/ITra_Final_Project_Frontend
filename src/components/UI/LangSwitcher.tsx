import LanguageIcon from '@mui/icons-material/Language';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FC, useState, MouseEvent } from 'react';
import { LANGUAGES } from '../../types/enums';

const LangSwitcher: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    const text = (event.target as HTMLElement).textContent;
    // TODO Do something on lang choosing (if text)
    console.log(`Chosen lang: ${text}`);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <LanguageIcon color="secondary" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>{LANGUAGES.EN}</MenuItem>
        <MenuItem onClick={handleClose}>{LANGUAGES.RU}</MenuItem>
      </Menu>
    </div>
  );
};

export default LangSwitcher;
