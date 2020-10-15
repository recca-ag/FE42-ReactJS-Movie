import React, { Fragment } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Dashboard from './../containers/admin/Dashboard';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
function AdminLayout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{ backgroundColor: "rgba(50,50,50,0.9)", }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              <NavLink to="/admin/movie" className="logo" style={{ textDecoration: "none" }} >
                <img src="https://i0.wp.com/thegamehaus.com/wp-content/uploads/2020/05/Volibear_Emote.png?resize=256%2C256&ssl=1"
                  alt="logo"
                  style={{ width: 45, height: 45 }} />
                <span style={{ fontFamily: '"Metal Mania",cursive', color: "#60c5ef" }}>Cyber Admin</span>
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }} style={{
            zIndex: "99",
          }}>
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>

            <NavLink to="/admin/movie" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button key="Quản lý phim">
                <LocalMoviesIcon style={{ marginRight: 32 }} />
                <ListItemText primary="Quản lý phim" />
              </ListItem>
            </NavLink>
            <NavLink
              to="/admin/user"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button key="Thành viên">
                <PeopleAltIcon style={{ marginRight: 32 }} />
                <ListItemText primary="Thành viên" />
              </ListItem>
            </NavLink>
          </List>
          <Divider />
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button key="Về trang chủ">
              <ExitToAppIcon style={{ marginRight: 32 }} />
              <ListItemText primary="Về trang chủ" />
            </ListItem>
          </NavLink>
        </Drawer>
        <main className={classes.content} style={{ padding: "0px" }}>
          <div className={classes.toolbar} />
          <Typography paragraph>{props.children}</Typography>
        </main>
      </div>
    </Fragment >
  );


};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("userAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        return <Redirect to="/auth" />
      }}
    />
  )
}

// function AdminLayout(props) {
//   return (
//     <div className="row">
//       <div className="col-sm-2">
//         <Dashboard />
//       </div>
//       <div className="col-sm-10">
//         {props.children}
//       </div>
//     </div>
//   )
// }

// export default function AdminTemplate({ Component, ...props }) {
//   return (
//     <div>
//       <Route
//         {...props}
//         render={propsComponent => {
//           if (localStorage.getItem("userAdmin")) {
//             return (
//               <AdminLayout>
//                 <Component {...propsComponent} />
//               </AdminLayout>
//             );
//           }
//           return <Redirect to="/auth" />
//         }}
//       />
//     </div>
//   )
// }
