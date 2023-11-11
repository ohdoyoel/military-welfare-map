import { styled, alpha, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
    onKeyUp: () => void
}

export const SearchInput = ({onKeyUp}: SearchInputProps) => {

    const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

    return (
    <div className="w-full h-12 bg-[#3396ff] flex justify-center px-8">
        <div className='w-full h-full shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]'>
            <Search>
            <SearchIconWrapper>
              <SearchIcon color="info" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="장소 검색"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
    </div>
    )
}