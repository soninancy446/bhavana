import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
// import { Button } from '@material-ui/core';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemsDrawer from './ListItemsDrawer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  username : {
    fontSize: '1.2rem'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 0.9,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {

    height: 240,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function GetAllProductsComponent(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const handleDeshboard = () => {
    props.history.push("/Dashboard");
    console.log("MyDashboard");
  };
  const handleAllProduct = () => {

    console.log("GetAllProducts");
    props.history.push("/GetAllProductsComponent");
  }
  const handleAboutUs = () => {

    console.log("AboutComponent");

    props.history.push("/AboutUsComponent");
  }
  const handleAdmin=()=>{
    props.history.push("/Admin");
  }
  const handleLogout=()=>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('role')
    props.history.push("/");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            About Us
        </Typography>
        <Typography className={classes.username} componnet="h2">
          Hi,{sessionStorage.getItem('name')}
        </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ListItemsDrawer
          Dashboard={handleDeshboard}
          AllProduct={handleAllProduct}
          AboutUs={handleAboutUs} 
          
          Admin={handleAdmin}
          Logout={handleLogout}/>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
<Grid>
<Grid item xs={10} sm={10} md={12}>
    <Card varient="outlined" className={classes.reducepaddingfronbottomandtop}>
        <CardContent>
            <Grid container direction="column" style={{ textAlign: "center" }}>
                <Grid item >
                    <Typography gutterBottom>
                      
                        <CardHeader title=
                            "Thank you for Visiting" className={classes.description} />
                    </Typography>
                </Grid>
                <Divider></Divider>
                <Grid >
                    <Divider></Divider>
                    <Grid container alignItems="center" direction="column">  
                    <Grid item>                                      
                    <CardContent>
                    <Typography varient="h3" gutterBottom>
                        
</Typography>
                </CardContent>
                </Grid>
                <Grid item>
                <CardContent>
                    <Typography varient="h3" gutterBottom>
                      
</Typography>
                </CardContent>
                </Grid>
                <Grid item>
                <CardContent>
                    <Typography varient="h3" gutterBottom>
                        
</Typography>
                </CardContent>
                </Grid>
                <Grid item>
                <CardContent>
                    <Typography varient="h3" gutterBottom>
                        
</Typography>
                </CardContent>
                </Grid>
                </Grid>
                </Grid>

            </Grid>
        </CardContent>
    </Card>


</Grid>
</Grid>
          </Container></main>
    </div>

  );
}