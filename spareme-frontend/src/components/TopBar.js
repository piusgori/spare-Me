import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from '../styles/theme';
import { useMediaQuery, useTheme } from '@mui/material';
import { Add, ChatBubbleRounded, LiveHelpRounded, PinDropRounded } from '@mui/icons-material';
import { InterfaceContext } from '../services/interface-context';

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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AppIconButton = styled(IconButton)(() => ({
    color: Colors.white
}));

const MobileBar = ({ openDrawer }) => {

  const pos = window.pageYOffset;
  const isTop = pos < 50;

    return (
        <Box sx={{ flexGrow: 1, position: 'absolute', zIndex: 99, width: '100%' }}>
            <AppBar position="static" sx={{ background: isTop ? 'transparent' : Colors.primary }}>
                <Toolbar>
                <AppIconButton onClick={openDrawer} size="large" edge="start" color='default' aria-label="open drawer" sx={{ mr: 2 }}><MenuIcon /></AppIconButton>
                <Search>
                    <SearchIconWrapper><SearchIcon sx={{ color: Colors.white }} /></SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
        </Box>
    )
};

const DesktopBar = () => {

  const pos = window.pageYOffset;
  const isTop = pos < 50;

    return (
        <Box sx={{ flexGrow: 1, position: 'absolute', zIndex: 99, width: '100%' }}>
            <AppBar position="static" sx={{ background: isTop ? 'transparent' : Colors.primary }}>
                <Toolbar>
                <Search>
                    <SearchIconWrapper><SearchIcon sx={{ color: Colors.white }} /></SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <AppIconButton sx={{ mr: 4 }}><PinDropRounded></PinDropRounded></AppIconButton>
                    <AppIconButton sx={{ mr: 4 }}><ChatBubbleRounded></ChatBubbleRounded></AppIconButton>
                    <AppIconButton sx={{ mr: 4 }}><LiveHelpRounded></LiveHelpRounded></AppIconButton>
                    <AppIconButton sx={{ mr: 4 }}><Add></Add></AppIconButton>
                </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default function TopBar() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const { setDrawerOpen } = React.useContext(InterfaceContext);
    if(!matches) setDrawerOpen(false);

    const openDrawer = () => {
        if(matches) setDrawerOpen(true);
    }

  return matches ? <MobileBar openDrawer={openDrawer}></MobileBar> : <DesktopBar></DesktopBar>
}
