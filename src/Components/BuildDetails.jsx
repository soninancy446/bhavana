import React, { useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { createMuiTheme } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
// import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Snackbar from '@material-ui/core/Snackbar';
import NativeSelect from '@material-ui/core/NativeSelect';
import Card from '@material-ui/core/Card'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import { triggerBuildUsingBranchfromCommitId } from '../Services/ServiceNew'
import Reactpagination from './Reactpagination'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField, Dialog, DialogTitle, DialogContentText, CardHeader, CardContent } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { fade, makeStyles } from '@material-ui/core/styles';
import GetAppOutlined from '@material-ui/icons/GetAppOutlined';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import Pagination from './Pagination'
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import { getProductBuildDetails } from '../Services/ServiceNew'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemsDrawer from './ListItemsDrawer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { getTriggerBranchData } from '../Services/ServiceNew'
import { getRejectedBuildsCount } from '../Services/ServiceNew'
import { triggerBuildUsingBranch, getbuildsPerProduct, getApproveBuildsPerProduct } from '../Services/ServiceNew'
const drawerWidth = 240;



const useStyles = makeStyles(theme => ({

    root: {

        display: 'flex',


    },
    username: {
        fontSize: '1.2rem'
    },
    container: {
        maxHeight: 440,
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    fontsizedata: {
        fontSize: '16px'
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
    fonts: {
        fontSize: '40pt'
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
    tablecellfont: {
        // fontWeight : '500',
        fontSize: '18px',

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
    reducesize: {
        padding: 0
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

export default function BuildDetails(props) {
    const [state, setState] = React.useState({
        age: '',

    });
    const classes = useStyles();

    const [value, setValue] = React.useState();
    const [radioButton, setradioButton] = React.useState(false)
    const [open, setOpen] = React.useState(true);
    const [show, setShow] = React.useState(false);
    const [project, setProject] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postPerPage, setPostPerPage] = React.useState(3);
    const [secondradionbutton, setSecondradionbutton] = React.useState(false);
    const [showpropertydetails, setshowpropertydetails] = React.useState(false);
    const [build, setBuild] = React.useState([]);
    const [roles, setRoles] = React.useState();
    const [commitId, setCommtId] = React.useState();
    // const [projectName, setProjectName] = React.useState(false);
    const [productId, setproductId] = React.useState(false);
    const [Branch, setBranch] = React.useState([]);
    const [openCard, setOpenCard] = React.useState(false)
    const [openPaper, setOpenPaper] = React.useState(false)
    const [approvepage, setApprovepage] = React.useState(false)
    const [clicklistener, setClicklistener] = React.useState(true)
    const [branchName, setBranchName] = React.useState([])
    const [alert, setAlert] = React.useState({ open: false, message: "", backgroundColor: "" })


    const storeCommtId = (event) => {
        setCommtId(event)
    }
    const handleAdmin = () => {

        //validation api call and logout

        props.history.push("/Admin");
    }
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('role')
        props.history.push("/");
    }
    const handleBranch = (getBranch) => {
        setBranch(getBranch)
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleRadioGroupChange = (value) => {
        setProject(project=>[project,value]);
        setValue(value)
        if (value === 1) {
            setSecondradionbutton(true)
        }
        else
            setradioButton(true);
    }
    const radioButtononeClick = () => {
        //setradioButton();
        setSecondradionbutton(true)
    }
    const radioButtonTwoClick = () => {
        setradioButton(true);
        // setSecondradionbutton()
    }
    const handleGetProductId = (getProductId) => {
        setproductId(getProductId);
    }
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const handleDeshboard = () => {

        //validation api call and logout
        props.history.push("/Dashboard");
        console.log("MyDashboard");
    };
    const handleAllProduct = () => {
        console.log("GetAllProducts");

        //validation api call and logout

        props.history.push("/GetAllProductsComponent");
    }
    //     const handleRadioGroupChange = ()=>{
    // console.log("hi")
    //     }
    const [holdBranch, setHoldBranch] = React.useState('')
    const handleBranchData = age => event => {
        setState(
            {
                ...state,
                [age]: event.target.value
            }

        )
        setHoldBranch(event.target.value)
        console.log("branchName", event.target.value)


        console.log("branchName--->", event.target.value)
        console.log("productId--->", props.location.state.producId)

    }
    const triggerBuild = () => {
        setOpenPaper(false)
        console.log('commitId---->',createProductName)
        console.log("holdbranch---->",holdBranch)
       
         if(holdBranch == 'qa' || holdBranch == 'dev' || holdBranch == 'stage' || holdBranch == 'master'){
            triggerBuildUsingBranch(holdBranch, props.location.state.producId).then((res) => {
                if (res.status == '401') {
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('role')
                    props.history.push('/')
                }
                else {
                    console.log(res.clone().json())
                    getProductBUilds()
                    return res.json()
                }
            }).then((key) => {

                setAlert({ open: true, message: "Build Triggered Successfully !!!", backgroundColor: "#5c5959" })
                console.log(key)
            }).catch((err) => {

                setAlert({ open: true, message: "Something went wrong !!!", backgroundColor: "#5c5959" })
            })
        }
        else{

            triggerBuildUsingBranchfromCommitId(createProductName, props.location.state.producId).then((res) => {
                if (res.status == '401') {
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('role')
                    props.history.push('/')
                }
                else {
                    console.log(res.clone().json())
                    getProductBUilds()
                    return res.json()
                }

            }).then((key) => {
                setCreateproductname('')
                setAlert({ open: true, message: "Build Triggered Successfully !!!", backgroundColor: "#5c5959" })
                console.log(key)
            }).catch((err) => {

                setAlert({ open: true, message: "something went wrong !!!", backgroundColor: "#5c5959" })
                console.log(err)
            })

        }


    }
    const handlePercentage = () => {
        if (sessionStorage.getItem('role') == 'org_lead' || sessionStorage.getItem('role') == 'project_manager' || sessionStorage.getItem('role') == 'admin')
            return true
        else
            return false
    }

    const handleAboutUs = () => {
        console.log("AboutComponent");
        props.history.push("/AboutUsComponent");
    }

    const handleTrigger = (versionid, branch, status, approvedby, timestamp) => {
        // props.history.push("/TriggerComponent");
        props.history.push({ pathname: "/TriggerComponent", state: { versionId: versionid } })
    }
    const handle = (getProject) => {
        setProject(getProject)
        console.log(getProject);
    }



    const indexOfLastPage = currentPage * postPerPage;
    console.log(indexOfLastPage)
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    console.log(indexOfFirstPage)
    console.log(project.length)
    const currentPosts = project.slice(indexOfFirstPage, indexOfLastPage)
    const [buildsOfEach, setBuildsOfEach] = React.useState('');
    const [approveBuilds, setApproveBuilds] = React.useState('')
    const [rejectBuilds, setRejectBuilds] = React.useState('')
    
    const [perticularpdoductName, setParticularProductName] = React.useState('');
    const [page, setPage] = React.useState(0);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    


    useEffect(() => {

        //console.log(props)
        getProductBUilds()
         getBuildsForEveryProduct()
         getApproveBUildsForEachProduct()
         getRejectBUildsForEachProduct()


    }, [])
    const getProductBUilds = () => {
        getProductBuildDetails(props.location.state.producId).then((res) => {
            if (res.status == '401') {
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('role')
                props.history.push('/')
            }
            else {
                console.log(res.clone().json())
                return res.json()
            }

        }).then((key) => {
            console.log(key)
            setProject(key)
        }).catch((err) => {

            console.log(err)
        })
    }



    const getBranchData = () => {
        getTriggerBranchData().then((res) => {
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
            setBranchName(key)
        }).catch((err) => {

        })
    }

    const getBuildsForEveryProduct = () => {
        getbuildsPerProduct(props.location.state.producId).then((res) => {
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
            console.log("numberOfBuilds", key)
            setBuildsOfEach(key)

        }).catch((err) => {

        })
    }

    const getApproveBUildsForEachProduct = () => {
        getApproveBuildsPerProduct(props.location.state.producId).then((res) => {
            if (res.status == '401') {
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('role')
                props.history.push('/')
            }
            else {
                console.log(res.clone().json())
                return res.json()
            }


        }).then((key) => {
            console.log("approvedBuilds", key)
            setApproveBuilds(key)
        }).catch((err) => {

        })

    }
    const getRejectBUildsForEachProduct = () => {
        getRejectedBuildsCount(props.location.state.producId).then((res) => {
            if (res.status == '401') {
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('role')
                props.history.push('/')
            }
            else {
                console.log(res.clone().json())
                return res.json()
            }


        }).then((key) => {
            console.log("rejectedBuilds", key)
            setRejectBuilds(key)
        }).catch((err) => {

        })

    }

    const calculatePercentage = () => {
        console.log('numberOfBuilds', approveBuilds)
        console.log('buildsOfApproving', buildsOfEach)
        console.log('buildsOfRejecting', rejectBuilds)
        if (approveBuilds == '0' && buildsOfEach == '0'&&rejectBuilds=='0') {
            return 0
        }
        else  {
            // return approveBuilds / buildsOfEach * 100
            // return approveBuilds/(buildsOfEach+approveBuilds)*100
            // return (approveBuilds/buildsOfEach)*100
            // return 100-(approveBuilds/buildsOfEach)*100

            return (approveBuilds/(rejectBuilds+approveBuilds))*100
        }
    }


    const [branchTrigger, setBranchTrigger] = React.useState('');
    const [createProductName, setCreateproductname] = React.useState('');


    const emptyRows = rowsPerPage - Math.min(rowsPerPage, project.length - page * rowsPerPage);
    const openLink = (value) => {

        window.open(value, "_blank");
    }
    const saveData = () => {
        setOpenPaper(true)
    }
    const openApprovalPage = () => {
        setOpenPaper(false)
    }
    const closeDialogBox = () => {
        setApprovepage(false)
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const hideBUtton = () => {
        if (sessionStorage.getItem('role') == 'admin' || sessionStorage.getItem('role') == 'project_manager')
            return true
        else
            return false
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
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
                        List of Builds
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
                <div className={classes.toolbarIcon} >
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
                    Logout={handleLogout}
                />
            </Drawer>
            <Snackbar open={alert.open} message={alert.message} ContentProps={{
                style:
                    { backgroundColor: alert.backgroundColor }
            }} anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={() => setAlert({ ...alert, open: false })}
                autoHideDuration={4000} />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                    <div>
                        <Dialog open={openPaper} PaperProps={{
                            style: {
                                paddingTop: "3em",
                                paddingBottom: "3em",
                                paddingLeft: "6em",
                                paddingRight: "6em"
                            }
                        }}>
                            <DialogTitle>
                                <Grid container spacing={"2em"} alignItems="center" justify="space-between" >
                                    <Grid item>
                                        Trigger Builds
                                </Grid>
                                    <Grid item>

                                        <CloseIcon onClick={() => { openApprovalPage() }} style={{ cursor: 'pointer' }} />
                                    </Grid>
                                </Grid>
                            </DialogTitle>

                            <DialogContent >
                                <Divider></Divider>
                                <Grid conteiner alignItems="flex-start">
                                    <Grid item style={{ paddingTop: "2em" }}>

                                        <div className="left">
                                            <RadioGroup aria-label="role" className="triggerBuild" row  >

                                                {radioButton === false ?


                                                    <FormControlLabel control={<Radio />} value="1" onClick={() => handleRadioGroupChange(1)} label={
                                                        <select native class="DropList" value={state.age} onChange={handleBranchData('age')}
                                                            inputProps={{
                                                                name: 'age',
                                                                //id: 'age-native-simple',
                                                            }}

                                                        >
                                                            <option value="none" >Select Branch</option>
                                                            <option value="dev" >dev</option>
                                                            <option value="qa">qa</option>
                                                            <option value="stage">stage</option>
                                                            <option value="master">master</option>

                                                        </select>} /> : <FormControlLabel control={<Radio />} value="1" disabled onClick={() => handleRadioGroupChange(1)}
                                                            label={<select value={state.age} native class="DropList" disabled onChange={handleBranchData('age')}
                                                                inputProps={{
                                                                    name: 'age',
                                                                    //id: 'age-native-simple',
                                                                }}
                                                            >

                                                                <option value="dev">dev</option>
                                                                <option value="qa">qa</option>
                                                                <option value="stage">stage</option>
                                                                <option value="master">master</option>
                                                            </select>} />
                                                }

                                            </RadioGroup>
                                        </div>

                                    </Grid>
                                    <Grid item>
                                        <div className="right">

                                            {secondradionbutton === false ? <FormControlLabel value="2" onClick={() => handleRadioGroupChange(2)} control={<Radio />} label={<div><TextField id="outlined-basic" label="Commit id" variant="standard" value={createProductName}
                                                onChange={e => setCreateproductname(e.target.value)}
                                                labelWidth={70} />

                                            </div>} onClick={() => { handleRadioGroupChange() }} /> : <FormControlLabel disabled value="2" placeholder="abc" onClick={() => handleRadioGroupChange(2)} control={<Radio />} label={<div><TextField id="outlined-basic" variant="standard" value={createProductName}
                                                onChange={e => setCreateproductname(e.target.value)}
                                                labelWidth={70} />

                                            </div>} onClick={() => { handleRadioGroupChange() }} />}
                                        </div>
                                    </Grid>
                                    <Grid item style={{ paddingTop: "2em", paddingLeft: "8em" }} justify="flex-end" >

                                        <Button variant="contained" onClick={() => { triggerBuild() }}>Trigger</Button>
                                    </Grid>


                                </Grid>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <Grid item xs={10} sm={10} md={12}>
                        <Paper elevation={3}>

                            <Card className={classes.reducesize}>
                                <Grid item>
                                    <Typography varient="h3">
                                        <CardContent style={{ fontSize: "30px" }}>Product - {props.location.state.productName === null ? props.history.push('/') : props.location.state.productName}</CardContent>
                                    </Typography>
                                </Grid>

                                <CardContent >

                                    <Grid justify="space-between" container spacing={24}>
                                        {sessionStorage.getItem('role') === 'user' ? '' : <CardContent style={{ fontSize: "20px" }}  > Approve - {calculatePercentage()}%  </CardContent>}

                                        {hideBUtton() === true ? <Button variant="contained" onClick={() => { saveData() }}> Trigger Your Builds</Button>
                                            : <Button variant="contained" style={{ visibility: "hidden" }} onClick={() => { saveData() }}> Trigger Your Builds</Button>}
                                    </Grid>
                                </CardContent>
                            </Card>




                            <Divider ></Divider>
                            <TableContainer >
                                <Table>

                                    <TableHead>
                                        <TableRow >

                                            <TableCell className={classes.tablecellfont}>Builds</TableCell>
                                            <TableCell className={classes.tablecellfont}>Status</TableCell>
                                            <TableCell className={classes.tablecellfont}>Total Test</TableCell>
                                            <TableCell className={classes.tablecellfont}>Pased Test</TableCell>
                                            <TableCell className={classes.tablecellfont}>Failed Test</TableCell>
                                            <TableCell className={classes.tablecellfont}>NE</TableCell>

                                            <TableCell className={classes.tablecellfont}>Download</TableCell>



                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {

                                            project.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((value) => (

                                                    <TableRow hover style={{ cursor: 'pointer' }}>

                                                        <TableCell onClick={() => handleTrigger(value.id, value.properties_dict.branch, value.approvedby, value.timestamp, value.properties_dict.status)} className={classes.fontsizedata}>{value.name}</TableCell>
                                                        <TableCell onClick={() => handleTrigger(value.id, value.properties_dict.branch, value.approvedby, value.timestamp, value.properties_dict.status)} className={classes.fontsizedata}>{value.properties_dict.status}</TableCell>
                                                        <TableCell onClick={() => handleTrigger(value.id, value.properties_dict.branch, value.approvedby, value.timestamp, value.properties_dict.status)} className={classes.fontsizedata}>{value.properties_dict.test_total}</TableCell>
                                                        <TableCell onClick={() => handleTrigger(value.id, value.properties_dict.branch, value.approvedby, value.timestamp, value.properties_dict.status)} className={classes.fontsizedata}>{value.properties_dict.test_passed}</TableCell>
                                                        <TableCell onClick={() => handleTrigger(value.id, value.properties_dict.branch, value.approvedby, value.timestamp, value.properties_dict.status)} className={classes.fontsizedata}>{value.properties_dict.test_failed}</TableCell>
                                                        <TableCell onClick={() => handleTrigger(value.id, value.properties_dict.branch, value.approvedby, value.timestamp, value.properties_dict.status)} className={classes.fontsizedata}>{value.properties_dict.test_ne}</TableCell>
                                                        <TableCell className={classes.fontsizedata}><a onClick={() => openLink(value.properties_dict.download_url)} ><GetAppOutlined /></a></TableCell>
                                                    </TableRow>
                                                ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={project.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Grid>


                </Container></main>
        </div >
    );
}




// numberofbuilds

// approvedcard