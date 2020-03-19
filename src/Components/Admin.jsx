import React, { useEffect } from 'react';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import TablePagination from '@material-ui/core/TablePagination';
import Card from '@material-ui/core/Card'
import {  CardHeader, CardContent } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import {getAllUserForAdmin} from '../Services/ServiceNew'

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',

    },
    username : {
        fontSize: '1.2rem'
      },
    reducesize: {
        padding: 0
    },
    container: {
        maxHeight: 440,
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
    fontsizedata:{
        fontSize : '16px'
    },
    tablecellfont : {
        // fontWeight : '500',
        fontSize: '18px',
        
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
    contentadmin: {
        
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
    tableColumnWidth: {
        // table-layout: auto,
        tableLayout: 'auto',
        width: '150px',
        fontWeight: '600',
        fontSize: '18px'
    },
    tableDataWidth: {

        width: '150px',

    },
    paperadminTable: {
        width: '100%',
    },
    newtableColumnWidth :{
        width : '250px'
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
export default function Admin(props) {
    const classes = useStyles();
    const [pm, setPm] = React.useState([])
    const [click,setClick] =React.useState(false)
    const [project, setProject] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postPerPage, setPostPerPage] = React.useState(3);
    const [users, setUsers] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [allUser,setAllUser] = React.useState([])
  
    useEffect(() => {
        
        getAllUserForAdmin().then((res)=>{
          if (res.status == '401') {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('role')
            props.history.push('/')
          }
            else{
                console.log(res.clone().json())
            return res.json()
            }
            
        }).then((key)=>{
            setAllUser(key)
            console.log(allUser)
        }).catch((err)=>{
           
        })

    },[])
  const [open, setOpen] = React.useState(true);
  const [productDialog, setProductDialog] = React.useState(false);
  const userRegistationPage =()=>{
    props.history.push('/Registration')
}
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
  const paginate = (pageNumber) => {
    console.log("pagenumber",pageNumber)  
    setCurrentPage(pageNumber)}

  const handleAboutUs=()=>{

    console.log("AboutComponent");

    props.history.push("/AboutUsComponent");
  }
  const showProducts=(id)=>{
    setProductDialog(true)

    //api call

  }
  const handleAdmin=()=>{
    props.history.push("/Admin");
  }
  const handleLogout=()=>{
    props.history.push("/");
  }

  const closeDialogBox =()=>{
    setProductDialog(false)
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, allUser.length - page * rowsPerPage);
  


    return (
        <div  className={classes.root}>
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
         Manage Your Project
        </Typography>
        <Typography className={classes.username} componnet="h2">
          hi, {sessionStorage.getItem('name')}
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
       Logout={handleLogout}     />
     
    </Drawer>
   <main className={classes.contentadmin}>
      <div className={classes.appBarSpacer} style={{ marginright: '200px',
    width: 'max-content',
    margintop: '80px'}} />
      <Container maxWidth="lg" className={classes.container}>
      <Grid item xs={13} md={3} lg={4}>
          </Grid></Container></main>

            <div className="userTable">
             <Grid item>
                        <Paper elevation={3}>
                            <Card className={classes.reducesize}>
                                <Grid item>
                                   
                                        <CardHeader title="Users in Database" 
                                        action={
                                            <IconButton aria-label="Add User">
                                              <AddCircleOutline variant="contained" color="primary"  style={{ fontSize: "40px"}} onClick={()=>{userRegistationPage()}} />
                                
                                   
                                            </IconButton>
                                          }/>
                                        
                                </Grid>
                            </Card>




                            <Divider ></Divider>
                            <TableContainer >
                                <Table>

                                    <TableHead>
                                        <TableRow >

                                            <TableCell className={classes.tablecellfont}>Name</TableCell>
                                            <TableCell className={classes.tablecellfont}>Role</TableCell>
                                            <TableCell className={classes.tablecellfont}>Email </TableCell>
                                            <TableCell className={classes.tablecellfont}>Product</TableCell>
                                            

                                           



                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    
                                       {allUser.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((value) => (
                                        <TableRow>
                                            <TableCell className={classes.fontsizedata}>{value.username}</TableCell>
                                            <TableCell className={classes.fontsizedata}>{value.role}</TableCell>
                                            <TableCell className={classes.fontsizedata}>{value.email}</TableCell>
                                            <TableCell className={classes.fontsizedata}> {value.product_list.map((items)=>
                                              <div> {items.product_name} </div>
                                            )}    </TableCell>
                                            
                                            

                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={allUser.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
                        </Paper>
                        
                    </Grid>
                    </div>

        </div>
    )
}
