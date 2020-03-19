
import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CardHeader from '@material-ui/core/CardHeader';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import { getProduct } from '../Services/ServiceNew'
import { addProduct } from '../Services/ServiceNew'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import { DialogContent, Dialog, DialogTitle, FilledInput, } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemsDrawer from './ListItemsDrawer'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card'
import { getProducts } from '../Services/ServiceNew'
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
  username: {
    fontSize: '1.2rem'
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
  title : {
    fontSize: 'large'
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

  const [snackbar, setSnackbar] = React.useState(false);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [projectName, setProjectName] = React.useState(false);
  const [project, setProject] = React.useState([]);
  const [build, setBuild] = React.useState([]);
  const [response, setResponse] = React.useState([]);
  const [branch, setBranch] = React.useState([]);
  const [property1, setProperty1] = React.useState([]);
  const [showversion, setshowversion] = React.useState(false);
  const [openPaper, setOpenPaper] = React.useState(false)
  const [showversiondetails, setshowversiondetails] = React.useState(false);
  const [showpropertydetails, setshowpropertydetails] = React.useState(false);
  const [VersionName, setVersionName] = React.useState(false);
  const [BranchName, setBranchName] = React.useState(false);
  const [propertyName, setpropertyhName] = React.useState(false);
  const [alert,setAlert] = React.useState({open : false, message : "",backgroundColor:""})
  let projects = [
    {
      product_name: 'abc'
    },
    {
      product_name: 'def'
    },
    {
      product_name: 'def'
    }
  ]
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleSetVersion = (getversion) => {
    setVersionName(getversion);
  }
  const handleSetBranch = (getbranch) => {
    setBranchName(getbranch);
  }
  const handleSetproperty = (getproperty) => {
    setpropertyhName(getproperty);
  }
  const handletpropertydetails = () => {
    setshowpropertydetails(!showpropertydetails);
  }
  const handleVersion = () => {
    setshowversion(!showversion);
    console.log(showversion);
  };
  const handleProperty = (getProperty) => {
    console.log(getProperty);
    setProperty1(getProperty);
    console.log(property1.version_number);
  }
  const handleVersiondetails = () => {
    setshowversiondetails(!showversiondetails);
  };

  const handleBranchdetail = (getBranch) => {
    setBranch(getBranch);
  }

  const handleGetResponse = (getResponse) => {
    setResponse(getResponse);
  };

  const handleGetProjectName = (getProjectName) => {
    setProjectName(getProjectName);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleProject = (getProduct) => {
    setProject(getProduct);
  };
  const handleBuild = (getBuild) => {
    setBuild(getBuild);
  }
  const handleBranch = (getBranch) => {
    setBranch(getBranch);
  }
  const SnackbarhandleClose = () => {
    setSnackbar(false);
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const handleDeshboard = () => {

    ////validation api call and logout

    props.history.push("/Dashboard");
    console.log("MyDashboard");
  };
  const [openAddProductDialogBoxPaper, setOpenAddProductDialogBoxPaper] = React.useState(false)
  const handleAboutUs = () => {

    ////validation api call and logout

    props.history.push("/AboutUsComponent");
  }
  const handleAdmin = () => {

    ////validation api call and logout

    props.history.push("/Admin");
  }
  const handleLogout = () => {

    sessionStorage.removeItem('token')
    sessionStorage.removeItem('role')
    props.history.push("/");
  }

  const [createProductName, setCreateproductname] = React.useState('');


  const addSinglProduct = () => {
    setOpenAddProductDialogBoxPaper(false);
    console.log(createProductName)

    //validation api call and logout

    addProduct(createProductName).then(res => {
      console.log("respone-->",)
      if (res.status == '401') {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('role')
        props.history.push('/')
      }
      else {
        setCreateproductname('')
        console.log(res.clone().json())
        return res.json()
      }

    }).then((key) => {
      console.log(key)
     setAlert({open : true,message: "Product Added Successfully",backgroundColor:"#4BB543"})
      getProd()
    }).catch((err) => {
      setAlert({open : true,message: "Something Went Wrong",backgroundColor:"#4BB543"})
    })
    console.log(openAddProductDialogBoxPaper);
    console.log(openPaper);
  }
  const handleProductChange = (value1) => {
    setCreateproductname(value1);
    console.log(value1)
  }

  const [product, setproduct] = React.useState();
  const openDialogBox = () => {
    setOpenAddProductDialogBoxPaper(true)

  }

  const closeDialogBox = () => {
    setOpenAddProductDialogBoxPaper(false)
  }
  useEffect(() => {

    //validation api call and logout
      getProd()


  }, [])

  const getProd = () => {
    getProducts().then(res => {
      console.log("respone-->",res)
      if (res.status == '401') {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('role')
        props.history.push('/')
      }
      else {
        console.log(res.clone().json())
        return res.json()
      }
      // console.log(res.clone().json())
      // return res.json()

    }).then((key) => {
      console.log(key)

      setProject(key)
      console.log(key.product_name);

    }).catch((err) => {
      console.log()
console.log(err)
    })
  }
  const handlegetProducts = () => {
  }
  const handleBuildDetails = (id, productname) => {
    console.log(id);
    props.history.push({
      pathname: "/BUildDetails", state: { producId: id, productName: productname }
    });
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
          <Typography component="h1" variant="h6" color="inherit" noWrap style={{ flexGrow : '0.9'}}>
            Products
          </Typography>
          <Typography className={classes.username} componnet="h2">
          hi,{sessionStorage.getItem('name')}
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
          AllProduct={handlegetProducts}
          AboutUs={handleAboutUs}
          Admin={handleAdmin}
          Logout={handleLogout} />
      </Drawer>
      <Snackbar open={alert.open} message={alert.message} ContentProps={{style : 
            {backgroundColor : alert.backgroundColor} }} anchorOrigin={{vertical:"top",horizontal:"center"}}
             onClose={()=>setAlert({...alert,open:false})}
             autoHideDuration={4000} />
      <Dialog open={openAddProductDialogBoxPaper} PaperProps={{
                            style: {
                                paddingTop: "3em",
                                paddingBottom: "3em",
                                paddingLeft: "6em",
                                paddingRight: "6em"
                            }
                        }} >
                          <DialogTitle>
                                <Grid container spacing={"2em"} alignItems="center" justify="space-between" >
                                    <Grid item>
                                        Add Products
                                </Grid>
                                    <Grid item>

                                        <CloseIcon onClick={() => { closeDialogBox() }} style={{ cursor: 'pointer' }} />
                                    </Grid>
                                </Grid>
                            </DialogTitle>
        <Divider />
        <DialogContent >
          <Typography className={classes.typography}>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
              {/* <OutlinedInput type="text" id="standard-basic" placeholder="Product Name" value={createProductName}
                onChange={e => setCreateproductname(e.target.value)}
                labelWidth={70} /> */}
              <TextField id="outlined-basic" placeholder="Product Name" variant="outlined" label="Product Name" value={createProductName}
                onChange={e => setCreateproductname(e.target.value)}
                labelWidth={70} />
              
                <Grid item style={{ paddingTop: "2em", paddingLeft: "6em" }} justify="flex-end" >

<Button variant="contained" onClick={() => addSinglProduct()}>Add</Button>
</Grid>
            </FormControl>.</Typography>
        </DialogContent>
      </Dialog>
      <main className={classes.content}  >
        <Container maxWidth="lg" >

          <div >
    

            {sessionStorage.getItem('role') === 'admin' ? <div style={{ display: "flex", justifyContent: "flex-end", fontSize: 'large', paddingTop: '100px' }} >
              <AddCircleIcon onClick={() => { openDialogBox() }} style={{ cursor : 'pointer' ,fontSize: "200px", width: '4%', height: '40' }}>
              </AddCircleIcon>

            </div> : <div style={{ visibility: 'hidden', display: "flex", justifyContent: "flex-end", fontSize: 'large', paddingTop: '100px' }} >
                <AddCircleIcon onClick={() => { openDialogBox() }} style={{ cursor : 'pointer' ,fontSize: "200px", width: '4%', height: '40' }}>
                </AddCircleIcon>

              </div>}
              
          </div>



          <Grid container alignItems="flex-start" justify="flex-start" direction="row" spacing={3}>
            {project.map(value => (
              <Grid item xs={14} sm={6} md={3}>
                <Card onClick={() => handleBuildDetails(value.id, value.product_name)} props={props} varient="outlined" style={{cursor : 'pointer'}}>
                  <CardContent>
                    <Grid container direction="column" style={{ textAlign: "center" }}>
                      <Grid item >
                        <Typography varient="h2"  >
                          <CardHeader title={"Product Name"} 
                          />
                        </Typography>
                        
                      </Grid>
                      <Divider></Divider>
                      <Grid item >
                        <Typography varient="h3" gutterBottom className={classes.heading}>
                          <CardContent 
                             style ={{ fontSize : "30px"}}> {value.product_name} </CardContent>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <div>
      </div>
    </div>
  );
}