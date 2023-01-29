import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Box, IconButton, Drawer, Divider, ListSubheader } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CodeOff, CalendarViewWeekOutlined, BookOnlineOutlined, InfoOutlined } from '@mui/icons-material';

// My Imports
import { DrawerHead } from './DrawerHead';
import { DrawerItem } from './DrawerItems';

export function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box position={'relative'}>
      <ButtonFloating>
        <IconButton onClick={handleToggle}>
          {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </ButtonFloating>

      <DrawerBar variant="permanent" open={open}>
        <DrawerHead />

        <Divider sx={{ mt: '10px' }} />

        <ListSubheader>Planificacion</ListSubheader>
        <DrawerItem open={open} text="Tablero" Icon={CalendarViewWeekOutlined} />
        <DrawerItem open={open} text="Historial" Icon={BookOnlineOutlined} />
        <DrawerItem open={open} text="About" Icon={InfoOutlined} />

        <ListSubheader>Desarrollo</ListSubheader>
        <DrawerItem open={open} text="Código" Icon={CodeOff} />
      </DrawerBar>
    </Box>
  );
}


const drawerWidth = 240;


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  paddingTop: '80px',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  paddingTop: '80px',
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const ButtonFloating = styled(Box)(({ theme }) => ({
  display: 'block',
  position: 'absolute',
  zIndex: '15',
  right: '-15px',
  top: '117px',
  backgroundColor: theme.palette.primary.dark,
  borderRadius: '50%'
}))

const DrawerBar = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    zIndex: '10',
    paddingTop: '180px',
    position: 'relative',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
