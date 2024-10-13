import { styled } from '@mui/material/styles';
import { alpha, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FC, KeyboardEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../types/enums';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 0.5),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 200,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const INPUT_PLACEHOLDER = 'Search…';

const SearchField: FC = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const searchHandler = () => {
    // TODO Write search text to memory, navigate to Search page and perform searching
    console.log(text);
    setText('');
    navigate(PATHS.SEARCH_RESULTS_PAGE);
  };

  const onEnterPress: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code !== 'Enter') return;
    searchHandler();
  };

  return (
    <Search sx={{ flexGrow: 1 }}>
      <SearchIconWrapper onClick={searchHandler}>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyUp={onEnterPress}
        placeholder={INPUT_PLACEHOLDER}
      />
    </Search>
  );
};

export default SearchField;
