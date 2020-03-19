import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField, Dialog, DialogTitle } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import GetAppOutlined from '@material-ui/icons/GetAppOutlined';
import { Button } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import { getProductBuildDetails } from '../Services/ServiceNew'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemsDrawer from './ListItemsDrawer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { getTriggerBranchData } from '../Services/ServiceNew'
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({

    root: {

        display: 'flex',
        width: '100%',
        fontWeight: "bold",
        // backgroundColor: "red",
        margin: "10px",
        "&:hover": {
            //   backgroundColor: "green"
        }

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
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
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
export default function Tablebuild(props) {
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

    const storeCommtId = (event) => {
        setCommtId(event)
    }
    const handleAdmin = () => {
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
    const handleAboutUs = () => {


        //validation api call and logout

        console.log("AboutComponent");
        props.history.push("/AboutUsComponent");
    }

    const handleTrigger = (version_id) => {
        // props.history.push("/TriggerComponent");
        props.history.push({ pathname: "/TriggerComponent", state: { VersionId: version_id } })
    }
    const handle = (getProject) => {
        setProject(getProject)
        console.log(getProject);
    }
    const styles = theme => ({
        tableRow: {
            "&:hover": {
                backgroundColor: "blue !important",
            }
        }
    });

    
    const indexOfLastPage = currentPage * postPerPage;
    console.log(indexOfLastPage)
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    console.log(indexOfFirstPage)
    console.log(project.length)
    const currentPosts = project.slice(indexOfFirstPage, indexOfLastPage)

const  getProductBUilds =()=>{getProductBuildDetails(props.location.state.producId).then((res) => {
    console.log(res.clone().json())
    return res.json()
}).then((key) => {
    console.log(key)
    setProject(key)
}).catch((err)=>{
    sessionStorage.removeItem('token')
      sessionStorage.removeItem('role')

    props.history.push('/')
})}  
  
        
    
const getBranchData =()=>{
    getTriggerBranchData().then((res) => {
        console.log(res.clone().json())
        return res.json()
    }).then((key) => {
        setBranchName(key)
    }).catch((err)=>{
        sessionStorage.removeItem('token')
      sessionStorage.removeItem('role')
      props.history.push('/')
    })
}

    const handleBranchData = (buttonId) => {
        console.log(buttonId)
        setOpenPaper(false)

    }

    const openLink = (value) => {

        //validation api call and logout

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
                Logout={handleLogout}
            />
        </Drawer>
        <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Paper className={classes.root}>
                        {/* <Button variant="primary" justifyContent='flex-end' variant="contained" onClick={() => { saveData() }}>Trigger</Button> */}
                        <div className="Dailog-box">
                            <Dialog open={openPaper}>
                                <DialogTitle>
                                    Trigger BUilds
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                                    <CloseIcon onClick={() => { openApprovalPage() }} style={{ cursor: 'pointer' }} />
                                </DialogTitle>
                                <Divider />
                                <DialogContent >

                                    <div className="popup">
                                        <div className="left">
                                            <RadioGroup aria-label="role" className="triggerBuild" row  >

                                                {radioButton === false ?


                                                    <FormControlLabel control={<Radio />} value="1" onClick={() => handleRadioGroupChange(1)} label={
                                                        <select class="DropList" onClick={() => { handleBranchData(1) }}>
                                                            <option value="Development">Development</option>
                                                            <option value="Testing">Testing</option>
                                                            <option value="staging">Staging</option>
                                                            <option value="Master">Master</option>
                                                            {/* let dropDown={branchName.map((item) => {
      
                                                            < option key = { item.branch_name } onClick={() => { handleBranchData(item.branch_name) }}> { item.branch_name }</option>
                                                })} */}
                                                        </select>} /> : <FormControlLabel control={<Radio />} value="1" disabled onClick={() => handleRadioGroupChange(1)} label={<select class="DropList" disabled onClick={() => { handleBranchData(1) }}>

                                                            <option value="Development">Development</option>
                                                            <option value="Testing">Testing</option>
                                                            <option value="staging">Staging</option>
                                                            <option value="Master">Master</option>
                                                        </select>} />
                                                }

                                            </RadioGroup>
                                        </div>
                                        <div className="right">

                                            {secondradionbutton === false ? <FormControlLabel value="2" onClick={() => handleRadioGroupChange(2)} control={<Radio />} label={<div><TextField id="outlined-basic" label="Commit id" variant="standard" onChange={storeCommtId} />
                                                <Button variant="primary" justifyContent='flex-end' variant="contained" onClick={() => { handleBranchData() }}>Trigger</Button>
                                            </div>} onClick={() => { handleRadioGroupChange() }} /> : <FormControlLabel disabled value="2" onClick={() => handleRadioGroupChange(2)} control={<Radio />} label={<div><TextField id="outlined-basic" label="Commit id" variant="standard" onChange={storeCommtId} />
                                                <Button variant="primary" justifyContent='flex-end' variant="contained" disabled onClick={() => { handleBranchData() }}>Trigger</Button>
                                            </div>} onClick={() => { handleRadioGroupChange() }} />}
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>


                        <TableContainer className={classes.container}>
                            <div className="main-container">
                                {sessionStorage.getItem('role') === ('admin' || 'project_manager') ? <div className="left">
                                    <Button variant="primary" justifyContent='flex-end' variant="contained" onClick={() => { saveData() }}>Trigger your build</Button>
                                </div> : ''}
                                {sessionStorage.getItem('role') === 'user' ? '' : <div className="approve">
                                    approve
    
                                    </div>}

                            </div>
                            <Table >
                                <div>
                                    <TableHead >

                                        <div  >
                                            <TableRow >
                                                <TableCell className={classes.tableColumnWidth} >Products</TableCell>


                                                <TableCell className={classes.tableColumnWidth}>Builds</TableCell>
                                                <TableCell className={classes.tableColumnWidth}>Status</TableCell>
                                                <TableCell className={classes.tableColumnWidth}>Total Test</TableCell>
                                                <TableCell className={classes.tableColumnWidth}>Passed Test</TableCell>
                                                <TableCell className={classes.tableColumnWidth}>Failed Test</TableCell>

                                                <TableCell className={classes.tableColumnWidth} style={{ textAlign: 'center' }}>NE</TableCell>
                                                <TableCell className={classes.tableColumnWidth} style={{ textAlign: 'center' }}>Download</TableCell>
                                            </TableRow>
                                        </div>
                                    </TableHead>
                                    {project === 'Token Expired..!!' ? '' : project.map(value => (
                                        <TableRow class="table-row">
                                            <div hover style={{ cursor: 'pointer' }}>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.name}</TableCell>

                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.build_number}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.properties_dict.status}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.properties_dict.test_total}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.properties_dict.test_passed}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.properties_dict.test_failed}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} style={{ textAlign: 'center' }} className={classes.tableDataWidth}>{value.properties_dict.test_ne}</TableCell>
                                                <TableCell className={classes.tableDataWidth}>
                                                    <a onClick={() => openLink(value.properties_dict.download_url)} ><GetAppOutlined /></a></TableCell>
                                            </div>
                                        </TableRow>

                                    ))}
                                </div> </Table>
                            
                        </TableContainer>
                    </Paper>
                </Container></main>
        </div>
    )
}
