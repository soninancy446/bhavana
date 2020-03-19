import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Button, Card } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Snackbar from '@material-ui/core/Snackbar';
import ListItemsDrawer from './ListItemsDrawer';
import {  approveBuilds } from '../Services/ServiceNew';
import { rejectBuilds,singleBuildDetails } from '../Services/ServiceNew'
import Grid from '@material-ui/core/Grid';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    username : {
        fontSize: '1.2rem'
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
    description :{
        display: 'flex',
    
    
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    alignItems: 'center',
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
        bottompadding: {
            paddingBottom : 0
        }
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
    reducepaddingfronbottomandtop : {
        padding: 0
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
        justifyContent: 'center'
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
        width: '170px',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    tableDataWidth: {

        width: '180px',
    },
    // login:{
    //     justifycontent: 'center',
    //     display: 'flex',
    //     alignitems: 'center',
    //     fontfamily: ['Times New Roman', 'Times', 'serif'],
    //     paddingtop: '1em',
    //     margintop: '2em',
    //     flexwrap: 'wrap'
    // },
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

export default function BuildDetails(props) {
   
    const [alert,setAlert] = React.useState({open : false, message : "",backgroundColor:""})
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [show, setShow] = React.useState(false);
    const [project, setProject] = React.useState([]);
    const [toggleShow, settoggleShow] = React.useState(true);
    const [showData, toggleShowData] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [showpropertydetails, setshowpropertydetails] = React.useState(false);
    const [build, setBuild] = React.useState([]);
    const [projectName, setProjectName] = React.useState(false);
    const [postPerPage, setPostPerPage] = React.useState(3);
    const [snakebar, setsnakebar] = React.useState();
    const [opensnakebar, setopensnakebar] = React.useState();
    const [rejectBuild, setRejectBuild] = React.useState();


    const handlesnakebar = () => {
        setsnakebar(true);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleClicksnakebar = () => {
        setopensnakebar(true)
    }
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const indexOfLastPage = currentPage * postPerPage;
    console.log(indexOfLastPage)
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    console.log(indexOfFirstPage)
    console.log(project.length)
    const currentPosts = project.slice(indexOfFirstPage, indexOfLastPage)
    const handleGetProjectName = (getProjectName) => {
        setProjectName(getProjectName);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.login);
    const handleDeshboard = () => {
        props.history.push("/Dashboard");
        console.log("MyDashboard");
    };
    const handleAllProduct = () => {

        console.log("GetAllProducts");
        props.history.push("/GetAllProductsComponent");
    }
    const [versionid,setVersioid] = React.useState('')
    const [productDetails,setProductDetails] = React.useState([]);
    
   
    useEffect(()=>{

        console.log(props)
        getBuildDetails()
   
    },[])
    const getBuildDetails=() =>{
        console.log("version---->",props.location.state.versionId)
        setVersioid(props.location.state.versionId)
        singleBuildDetails(props.location.state.versionId).then((res)=>{
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
           //sessionStorage.setItem('date',key.timestamp)
         //  setDate(key.timestamp)
           var result=date.slice(0,10)
           setCurrentDateTime(result)
            setProductDetails(key)
        })
    }
    const handleAboutUs = () => {

        console.log("AboutComponent");

        props.history.push("/AboutUsComponent");
    }
    const handleTrigger = () => {
        props.history.push("/TriggerComponent");
    }
    const handle = (getProject) => {
        setProject(getProject)
        console.log(getProject);
    }

const [date,setDate]= React.useState('');
    const handleApprove = () => {

      
        console.log("id-->", props.location.state.versionId)
        console.log("name-- >", props.location.state.branchname)
        console.log("productname--> ", props.location.state.productname)
        console.log("productId", props.location.state.product)


        approveBuilds(props.location.state.versionId).then((res) => {
            if (res.status == '401') {
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('role')
                props.history.push('/')
            }
            else {
                getBuildDetails()
               
                setDate(productDetails.timestamp)
                var stringslice=sessionStorage.getItem('date')
                
                
                // props.history.push({
                //     pathname: "/BUildDetails", state: { producId: props.location.state.versionId ,productName : productDetails.product_name}
                // });
                console.log(res.clone().json())
                return res.json()
            }

        }).then((key) => {
            //sessionStorage.set
            setDate(key.timestamp)
                var result=date.slice(0,10)
                setCurrentDateTime(result)
                setAlert({open : true,message: "Build approved by "+sessionStorage.getItem('name')+" on "+sessionStorage.getItem('currentdate'),backgroundColor:"#5c5959"})
            console.log(key)
        })
        setsnakebar(false);



    }
const [currentDateTime,setCurrentDateTime] = React.useState('')
    const hideBUtton =() =>{
        console.log("--------hiiiiii-----")
        console.log(productDetails.approvedby,productDetails.rejectedby)
        if(productDetails.approvedby != "NA" || productDetails.rejectedby != "NA")
        return true
        else 
        return false
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

    const handleReject = (VersionId) => {
        setopensnakebar(false);
        rejectBuilds(props.location.state.versionId).then((res) => {
            if (res.status == '401') {
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('role')
                props.history.push('/')
            }
            else {
                getBuildDetails()
                

                
               
               
                // props.history.push({
                //     pathname: "/BUildDetails", state: { producId: props.location.state.versionId, productName: productDetails.product_name }
                // });
                console.log(res.clone().json())
                return res.json()
            }

        }).then((key) => {
            setDate(productDetails.timestamp)
            var result=date.slice(0,10)
            setCurrentDateTime(result)
            console.log("new data----->",result)
            setAlert({open : true,message: "Build rejected by "+sessionStorage.getItem('name')+" on "+sessionStorage.getItem('currentdate'),backgroundColor:"#5c5959"})
            console.log(key)

        })
    }

   const goToPreviosPage=(value)=>{
        props.history.push({
                    pathname: "/BUildDetails", state: { producId: value, productName: productDetails.product_name }
                });
    }

    return (
        <div className={classes.root}>
            
            <CssBaseline /> 
            <Snackbar open={alert.open} message={alert.message} ContentProps={{style : 
            {backgroundColor : alert.backgroundColor} }} anchorOrigin={{vertical:"top",horizontal:"center"}}
             onClose={()=>setAlert({...alert,open:false})}
             autoHideDuration={4000} />
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
                     Confirmation
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
                    AllProduct={handleAllProduct}
                    AboutUs={handleAboutUs}
                    Admin={handleAdmin}
                    Logout={handleLogout} />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                    {/*<Grid direction="row" justify="left" alignItems="left">
                
                {sessionStorage.getItem('role')=== 'user' ? '':  <div><Button variant="contained" color="primary" disabled={props.location.state.buildStatus==='NA' ? true : false } onClick={() => handleApprove()}>Approve</Button>
           &nbsp; <Button variant="contained" disabled={props.location.state.buildStatus==='NA' ? true : false } color="Secondary" onClick={() => handleReject()}>Reject</Button></div>}        


        */}

                    <Grid className={classes.bottompadding} container alignItems="center" justify="flex-start" direction="row" spacing={3}>

                        <Grid item xs={10} sm={10} md={12}>
                            <Card varient="outlined" className={classes.reducepaddingfronbottomandtop}>
                                <CardContent>
                                    <Grid container direction="column" style={{ textAlign: "center" }}>
                                        <Grid item >
                                            <Typography gutterBottom style={{ fontSize : '26px'}}>
                                                <CardHeader title=
                                                    "About Build" className={classes.description} />
                                            </Typography>
                                        </Grid>
                                        <Divider></Divider>
                                        <Grid >
                                            <Divider></Divider>
                                            <Grid container alignItems="flex-start" justify="center" style={{ paddingLeft:"32em"}} direction="column">  
                                            <Grid item >                                      
                                            <CardContent  >
                                            <Typography varient="h3" gutterBottom style={{ fontSize : "20px"}}>
                                                Product Name - {productDetails.product_name}
                        </Typography>
                                        </CardContent>
                                        </Grid>
                                        <Grid item>
                                        <CardContent>
                                            <Typography varient="h3" gutterBottom style={{ fontSize : "20px"}}>
                                                Build Name - {productDetails.build_name}
                        </Typography>
                                        </CardContent>
                                        </Grid>
                                        <Grid item>
                                        <CardContent>
                                            <Typography varient="h3" gutterBottom style={{ fontSize : "20px"}}>
                                                Branch - {productDetails.branch}
                        </Typography>
                                        </CardContent>
                                        </Grid>
                              {productDetails.approvedby === "NA" ? '' : <Grid item>
                                        <CardContent>
                                            <Typography varient="h3" gutterBottom style={{ fontSize : "20px"}}>
                                                ApprovedBy : {productDetails.approvedby}
                        </Typography>
                                        </CardContent>
                                        </Grid> }
                                      {productDetails.rejectedby === "NA" ? '' : <Grid item>
                                        <CardContent>
                                            <Typography varient="h3" gutterBottom style={{ fontSize : "20px"}}>
                                                RejectedBy : {productDetails.rejectedby}
                        </Typography>
                                        </CardContent>
                                        </Grid>}  
                                        {productDetails.rejectedby === "NA" ? '' : <Grid item>
                                        <CardContent>
                                            <Typography varient="h3" gutterBottom style={{ fontSize : "20px"}}>
                                                Date : {productDetails.timestamp}
                        </Typography>
                                        </CardContent>
                                        </Grid>  }

                                        {productDetails.approvedby === "NA" ? '' : <Grid item>
                                        <CardContent>
                                            <Typography varient="h3" gutterBottom style={{ fontSize : "20px"}}>
                                                Date : {productDetails.timestamp}
                        </Typography>
                                        </CardContent>
                                        </Grid>  }

                                        
                                        
                                        </Grid>
                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                    &nbsp;<div style={{  fontSize: 'large', textAlign: 'center' }} >
                {sessionStorage.getItem('role')=== 'user' ? '':  <div><Button variant="contained" disabled={hideBUtton()} color="primary"  onClick={() => handleApprove()}>Approve</Button>
           &nbsp; <Button variant="contained" disabled={hideBUtton()} color="Secondary" onClick={() => handleReject()}>Reject</Button></div>}        
           <Grid item style={{ paddingTop: "0.7em" }}>
           <Button variant="contained" color="primary" onClick={() => goToPreviosPage(productDetails.product_id)}>Go To Builds</Button>
           </Grid>
</div>
                </Container>
            </main>

        </div>

    );
}