import React from "react";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  CssBaseline,
  Collapse,
  Menu,
  MenuItem,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import KitchenIcon from "@material-ui/icons/Kitchen";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonIcon from "@material-ui/icons/Person";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "#14274e",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    background: "#14274e",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  img: {
    width: "20px",
    height: "20px",
    padding: "50%",
  },
  logo: {
    padding: "50%",
  },
  principalItem: {
    "&:hover": {
      background: "#9ba4b4",
    },
  },
}));

export default function Maqueta(props) {
  //Variables

  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [icon, setIcon] = React.useState(false);

  const [open, setOpen] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);

  //Funciones

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIcon = () => {
    setIcon(!icon);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Mini variant drawer
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            /* onClick={handleMenu} */
            color="inherit"
            onClick={handleClick}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
            <MenuItem onClick={handleClose}>Salir</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* DRAWER MAN */}

      <Drawer
        variant="permanent"
        color="primary"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <ListItem
            className={classes.principalItem}
            component="a"
            href="/home"
          >
            <ListItemIcon></ListItemIcon>
            <Typography variant="h3" color="secondary">
              Inicio
            </Typography>
          </ListItem>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon color="#fff" />
            ) : (
              <ChevronLeftIcon color="#fff" />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* AlmacenPagePage */}
          <ListItem
            component="a"
            href="/almacen"
            className={classes.principalItem}
          >
            <ListItemIcon>
              <LocalShippingIcon color="secondary" />
            </ListItemIcon>
            <Typography variant="h4" color="secondary">
              AlmacenPage
            </Typography>
          </ListItem>

          {/* Elaboracion */}
          <ListItem
            component="a"
            href="/elaboracion"
            className={classes.principalItem}
          >
            <ListItemIcon>
              <KitchenIcon color="secondary" />
            </ListItemIcon>
            <Typography variant="h4" color="secondary">
              Elaboracion
            </Typography>
          </ListItem>

          {/* Ventas */}
          <ListItem
            className={classes.principalItem}
            component="a"
            href="/ventas"
          >
            <ListItemIcon>
              <FastfoodIcon color="secondary" />
            </ListItemIcon>
            <Typography variant="h4" color="secondary">
              Ventas
            </Typography>
            {/*  <ListItemText primary="Ventas" /> */}
          </ListItem>

          {/* Contabilidad */}
          <ListItem onClick={handleIcon} className={classes.principalItem}>
            <ListItemIcon>
              <AttachMoneyIcon color="secondary" />
            </ListItemIcon>
            <Typography variant="h4" color="secondary">
              Contabilidad
            </Typography>
            {icon ? (
              <ExpandLess color="secondary" fontSize="small" />
            ) : (
              <ExpandMore color="secondary" fontSize="small" />
            )}
          </ListItem>
          <Collapse in={icon} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                component="a"
                href="/ipv"
                button
                className={`${classes.nested} ${classes.principalItem}`}
              >
                <ListItemIcon>
                  <StarBorder color="secondary" fontSize="small" />
                </ListItemIcon>
                <Typography variant="h5" color="secondary">
                  IPV
                </Typography>
              </ListItem>

              <ListItem
                button
                className={`${classes.nested} ${classes.principalItem}`}
                component="a"
                href="/salario"
              >
                <ListItemIcon>
                  <StarBorder color="secondary" fontSize="small" />
                </ListItemIcon>
                <Typography variant="h5" color="secondary">
                  Salarios
                </Typography>
              </ListItem>

              <ListItem
                button
                className={`${classes.nested} ${classes.principalItem}`}
                component="a"
                href="/analisis"
              >
                <ListItemIcon>
                  <StarBorder color="secondary" fontSize="small" />
                </ListItemIcon>
                <Typography variant="h5" color="secondary">
                  Analisis
                </Typography>
              </ListItem>
            </List>
          </Collapse>

          {/* Usuarios */}
          <ListItem
            component="a"
            href="/usuario"
            className={classes.principalItem}
          >
            <ListItemIcon>
              <PersonIcon color="secondary" />
            </ListItemIcon>
            <Typography variant="h4" color="secondary">
              Usuarios
            </Typography>
          </ListItem>

          {/* Trazas */}
          <ListItem
            component="a"
            href="/trazas"
            className={classes.principalItem}
          >
            <ListItemIcon>
              <TrendingFlatIcon color="secondary" />
            </ListItemIcon>
            <Typography variant="h4" color="secondary">
              Trazas
            </Typography>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
