import { FC, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';

import { LANGUAGES } from '../../types/enums';

const DATA_LANG_ATTR = 'lang';

const langAttr = `data-${DATA_LANG_ATTR}`;

const LangSwitcher: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    const lang: string | undefined = (event.target as HTMLElement).dataset[
      DATA_LANG_ATTR
    ];

    if (!lang || i18n.language === lang) {
      setAnchorEl(null);
      return;
    }

    i18n.changeLanguage(lang);
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
        <MenuItem {...{ [langAttr]: LANGUAGES.EN }} onClick={handleClose}>
          {t('header:LanguageEn')}
        </MenuItem>
        <MenuItem {...{ [langAttr]: LANGUAGES.RU }} onClick={handleClose}>
          {t('header:LanguageRu')}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LangSwitcher;
