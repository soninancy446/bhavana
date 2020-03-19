// // import React from 'react';
// // import AppBar from '@material-ui/core/AppBar';
// // import Toolbar from '@material-ui/core/Toolbar';
// // import Typography from '@material-ui/core/Typography';
// // import { fade, makeStyles } from '@material-ui/core/styles';
// // import { Button } from '@material-ui/core';
// // import clsx from 'clsx';
// // import Drawer from '@material-ui/core/Drawer';
// // import Container from '@material-ui/core/Container';
// // import Divider from '@material-ui/core/Divider';
// // import IconButton from '@material-ui/core/IconButton';
// // import Badge from '@material-ui/core/Badge';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// // import MenuIcon from '@material-ui/icons/Menu';
// // import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// // import NotificationsIcon from '@material-ui/icons/Notifications';
// // import ListItemsDrawer from './ListItemsDrawer';
// // import Grid from '@material-ui/core/Grid';
// // import Paper from '@material-ui/core/Paper';
// // import { TextField } from '@material-ui/core';
// // const drawerWidth = 240;

// // const useStyles = makeStyles(theme => ({
// //   root: {
// //     display: 'flex',
// //   },
// //   toolbar: {
// //     paddingRight: 24, // keep right padding when drawer closed
// //   },
// //   toolbarIcon: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     padding: '0 8px',
// //     ...theme.mixins.toolbar,
// //   },
// //   appBar: {
// //     zIndex: theme.zIndex.drawer + 1,
// //     transition: theme.transitions.create(['width', 'margin'], {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //   },
// //   appBarShift: {
// //     marginLeft: drawerWidth,
// //     width: `calc(100% - ${drawerWidth}px)`,
// //     transition: theme.transitions.create(['width', 'margin'], {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   },
// //   menuButton: {
// //     marginRight: 36,
// //   },
// //   menuButtonHidden: {
// //     display: 'none',
// //   },
// //   title: {
// //     flexGrow: 1,
// //   },
// //   drawerPaper: {
// //     position: 'relative',
// //     whiteSpace: 'nowrap',
// //     width: drawerWidth,
// //     transition: theme.transitions.create('width', {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   },
// //   drawerPaperClose: {
// //     overflowX: 'hidden',
// //     transition: theme.transitions.create('width', {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     width: theme.spacing(7),
// //     [theme.breakpoints.up('sm')]: {
// //       width: theme.spacing(9),
// //     },
// //   },
// //   appBarSpacer: theme.mixins.toolbar,
// //   content: {
// //     flexGrow: 1,
// //     height: '100vh',
// //     overflow: 'auto',
// //   },
// //   container: {
// //     paddingTop: theme.spacing(4),
// //     paddingBottom: theme.spacing(4),
// //   },
// //   paper: {
// //     padding: theme.spacing(2),
// //     display: 'flex',
// //     overflow: 'auto',
// //     flexDirection: 'column',
// //   },
// //   fixedHeight: {

// //     height: 240,
// //   },
// //   search: {
// //     position: 'relative',
// //     borderRadius: theme.shape.borderRadius,
// //     backgroundColor: fade(theme.palette.common.white, 0.15),
// //     '&:hover': {
// //       backgroundColor: fade(theme.palette.common.white, 0.25),
// //     },
// //     marginLeft: 0,
// //     width: '100%',
// //     [theme.breakpoints.up('sm')]: {
// //       marginLeft: theme.spacing(1),
// //       width: 'auto',
// //     },
// //   },
// //   inputRoot: {
// //     color: 'inherit',
// //   },
// //   inputInput: {
// //     padding: theme.spacing(1, 1, 1, 7),
// //     transition: theme.transitions.create('width'),
// //     width: '100%',
// //     [theme.breakpoints.up('sm')]: {
// //       width: 120,
// //       '&:focus': {
// //         width: 200,
// //       },
// //     },
// //   },
// // }));

// // export default function Dropdown(props) {
// //   const classes = useStyles();
// //   const [open, setOpen] = React.useState(true);
// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };
// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };
// //   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
// //   const handleDeshboard = () => {
// //     props.history.push("/Dashboard");
// //     console.log("MyDashboard");
// //   };
// //   const handleAllProduct = () => {

// //     console.log("GetAllProducts");
// // props.history.push("/GetAllProductsComponent");
// //   }
// //   const handleAboutUs=()=>{

// //     console.log("AboutComponent");

// //     props.history.push("/AboutUsComponent");
// //   }

// //   return (
// //     <div className={classes.root}>
// //     <CssBaseline />
// //     <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
// //       <Toolbar className={classes.toolbar}>
// //         <IconButton
// //           edge="start"
// //           color="inherit"
// //           aria-label="open drawer"
// //           onClick={handleDrawerOpen}
// //           className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
// //         >
// //           <MenuIcon />
// //         </IconButton>
// //         <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
// //         Trigger
// //         </Typography>
// //         <IconButton color="inherit">
// //           <Badge badgeContent={0} color="secondary">
// //             <NotificationsIcon />
// //           </Badge>
// //         </IconButton>
// //       </Toolbar>
// //     </AppBar>
// //     <Drawer
// //       variant="permanent"
// //       classes={{
// //         paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
// //       }}
// //       open={open}
// //     >
// //       <div className={classes.toolbarIcon}>
// //         <IconButton onClick={handleDrawerClose}>
// //           <ChevronLeftIcon />
// //         </IconButton>
// //       </div>
// //       <Divider />
// //      <ListItemsDrawer 
// //        Dashboard={handleDeshboard}
// //        AllProduct={handleAllProduct}
// //        AboutUs={handleAboutUs}   />
     
// //     </Drawer>
// //    <main className={classes.content}>
// //       <div className={classes.appBarSpacer} />
// //       <Container maxWidth="lg" className={classes.container}>
// //       <Grid item xs={12} md={4} lg={3}>
// //             <Paper className={fixedHeightPaper}>
// //           <h1>  <select>
// //    <option value="stage">stage</option>
// //    <option value="qa">qa</option>
// //    <option selected value="master">master</option>
// //    <option value="dev">dev</option>
// //  </select></h1><br/>
// //  <TextField id="outlined-basic" label="Commit id" variant="outlined" />
// //  <Button ></Button>
// //             </Paper>
// //           </Grid></Container></main>
    
     

// //     </div>
 
// // );
// // }

// // import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Paper from '@material-ui/core/Paper';
// // import Table from '@material-ui/core/Table';
// // import TableBody from '@material-ui/core/TableBody';
// // import TableCell from '@material-ui/core/TableCell';
// // import TableContainer from '@material-ui/core/TableContainer';
// // import TableHead from '@material-ui/core/TableHead';
// // import TablePagination from '@material-ui/core/TablePagination';
// // import TableRow from '@material-ui/core/TableRow';

// // const columns = [
// //   { id: 'name', label: 'Name', minWidth: 170 },
// //   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
// //   {
// //     id: 'population',
// //     label: 'Population',
// //     minWidth: 170,
// //     align: 'right',
// //     format: value => value.toLocaleString(),
// //   },
// //   {
// //     id: 'size',
// //     label: 'Size\u00a0(km\u00b2)',
// //     minWidth: 170,
// //     align: 'right',
// //     format: value => value.toLocaleString(),
// //   },
// //   {
// //     id: 'density',
// //     label: 'Density',
// //     minWidth: 170,
// //     align: 'right',
// //     format: value => value.toFixed(2),
// //   },
// // ];

// // function createData(name, code, population, size) {
// //   const density = population / size;
// //   return { name, code, population, size, density };
// // }

// // const rows = [
// //   createData('India', 'IN', 1324171354, 3287263),
// //   createData('China', 'CN', 1403500365, 9596961),
// //   createData('Italy', 'IT', 60483973, 301340),
// //   createData('United States', 'US', 327167434, 9833520),
// //   createData('Canada', 'CA', 37602103, 9984670),
// //   createData('Australia', 'AU', 25475400, 7692024),
// //   createData('Germany', 'DE', 83019200, 357578),
// //   createData('Ireland', 'IE', 4857000, 70273),
// //   createData('Mexico', 'MX', 126577691, 1972550),
// //   createData('Japan', 'JP', 126317000, 377973),
// //   createData('France', 'FR', 67022000, 640679),
// //   createData('United Kingdom', 'GB', 67545757, 242495),
// //   createData('Russia', 'RU', 146793744, 17098246),
// //   createData('Nigeria', 'NG', 200962417, 923768),
// //   createData('Brazil', 'BR', 210147125, 8515767),
// // ];

// // const useStyles = makeStyles({
// //   root: {
// //     width: '100%',
// //   },
// //   container: {
// //     maxHeight: 440,
// //   },
// // });

// // export default function StickyHeadTable() {
// //   const classes = useStyles();
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = event => {
// //     setRowsPerPage(+event.target.value);
// //     setPage(0);
// //   };

// //   return (
// //     <Paper className={classes.root}>
// //       <TableContainer className={classes.container}>
// //         <Table stickyHeader aria-label="sticky table">
// //           <TableHead>
// //             <TableRow>
// //               {columns.map(column => (
// //                 <TableCell
// //                   key={column.id}
// //                   align={column.align}
// //                   style={{ minWidth: column.minWidth }}
// //                 >
// //                   {column.label}
// //                 </TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
// //               return (
// //                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
// //                   {columns.map(column => {
// //                     const value = row[column.id];
// //                     return (
// //                       <TableCell key={column.id} align={column.align}>
// //                         {column.format && typeof value === 'number' ? column.format(value) : value}
// //                       </TableCell>
// //                     );
// //                   })}
// //                 </TableRow>
// //               );
// //             })}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       <TablePagination
// //         rowsPerPageOptions={[10, 25, 100]}
// //         component="div"
// //         count={rows.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onChangePage={handleChangePage}
// //         onChangeRowsPerPage={handleChangeRowsPerPage}
// //       />
// //     </Paper>
// //   );
// // }
// // import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
// // import Typography from '@material-ui/core/Typography';
// // import clsx from 'clsx';

// // import IconButton from '@material-ui/core/IconButton';
// // import Button from '@material-ui/core/Button';
// // import FilledInput from '@material-ui/core/FilledInput';
// // import OutlinedInput from '@material-ui/core/OutlinedInput';
// // import InputLabel from '@material-ui/core/InputLabel';
// // import InputAdornment from '@material-ui/core/InputAdornment';
// // import FormHelperText from '@material-ui/core/FormHelperText';
// // import FormControl from '@material-ui/core/FormControl';
// // import TextField from '@material-ui/core/TextField';
// // import Popper from '@material-ui/core/Popper';
// // import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
// // import Fade from '@material-ui/core/Fade';
// // import Paper from '@material-ui/core/Paper';

// // const useStyles = makeStyles(theme => ({
// //   typography: {
// //     padding: theme.spacing(5),
// //   },
// // }));

// // export default function PopperPopupState() {
// //   const classes = useStyles();

// //   return (
// //     <PopupState variant="popper" popupId="demo-popup-popper">
// //       {popupState => (
// //         <div>
// //           <AddCircleIcon variant="contained" color="primary" {...bindToggle(popupState)}>
// //             Toggle Popper
// //           </AddCircleIcon>
// //           <Popper {...bindPopper(popupState)} transition>
// //             {({ TransitionProps }) => (
// //               <Fade {...TransitionProps} timeout={350}>
// //                 <Paper>
// //                   <Typography className={classes.typography}> <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
// //           <InputLabel htmlFor="outlined-adornment-password">ProductName</InputLabel>
        
// //           <OutlinedInput
// //             endAdornment={
// //               <InputAdornment position="end">
// //               </InputAdornment>
// //             }
// //             labelWidth={70}
// //           />&nbsp;<Button>Submit</Button>
// //         </FormControl>.</Typography>  
// //                 </Paper>
// //               </Fade>
// //             )}
// //           </Popper>
// //         </div>
// //       )}
// //     </PopupState>
// //   );
// // }
// // import React, { Component } from 'react';

// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       clicks: 0,
// //       show: true
// //     };
// //   }

// //   IncrementItem = () => {
// //     this.setState({ clicks: this.state.clicks + 1 });
// //   }
// //   DecreaseItem = () => {
// //     this.setState({ clicks: this.state.clicks - 1 });
// //   }
// //   ToggleClick = () => {
// //     this.setState({ show: !this.state.show });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <button onClick={this.IncrementItem}>Click to increment by 1</button>
// //         <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
// //         <button onClick={this.ToggleClick}>
// //           { this.state.show ? 'Hide number' : 'Show number' }
// //         </button>
// //         { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
// //       </div>
// //     );
// //   }
// // }

// // export default App;
// import React, { PropTypes,Component } from 'react';

// // export default class Dropdown extends Component {
// //   constructor(props){
// //     super(props);
// //     this.state={
// //       show:true

// //     }
// //   }
  
// //   render() {
// //     return (
// //       <div>
        
// //           {this.state.show?<button  onClick={()=>this.setState({show:!this.state.show})}>Approved</button>:null   }
// //           <button onClick={()=>this.setState({show:!this.state.show})}>Rejected</button> 
// //           {this.state.show?<button  onClick={()=>this.setState({show:!this.state.show})}>Approved</button>:null   }
// //           {/* <button onClick={()=>this.setState({show:!this.state.show})}>Rejected</button> */}
// //       </div>
// //     )
// //   }
// // }
// // export default function Dropdown (){
// //   const [show,setShow]=React.useState(true);
// //     return (
// //       <div>
// //         {show?<button>hello</button>:null}
// //          <button onClick={()=>setShow({show:!show})}>Approved</button>
        
// //       </div>
// //     );
// // }
// // export default function Toggle  ()  {
// //   const [show, toggleShow] = React.useState(true);
// //   const [showData, toggleShowData] = React.useState(true);

// //   return (
// //     <div>
// //       <button onClick={() => toggleShow(!show)} >
// //         toggle: {show ? 'show' : 'hide'}
// //       </button>    
// //       {showData && <div>Hi there</div>}
// //       <button onClick={() => toggleShowData(!showData)} >
// //         toggle: {showData ? 'show11' : 'hide11'}
// //       </button>    
// //       {showData && <div> there</div>}
// //     </div>
// //   )
// // }
// export default class MyComponent extends React.Component {
//   constructor(props) {
//       super(props);

//       this.onChangeDisabled = this.onChangeDisabled.bind(this);
//       this.onDeleteAll = this.onDeleteAll.bind(this);

//       this.state = {
//           disabled: props.initialDisabled || false
//       };
//   }

//   onChangeDisabled(e) {
//       this.setState({disabled: !e.target.checked});
//   }

//   onDeleteAll(e) {
//       this.props.onDeleteAll();
//   }

//   render() {
//       return (
//           <div>
//               <button
//                   disabled={this.state.disabled}
//                   onClick={this.onDeleteAll}
//               ><h1>delete</h1>
//                   {/* <Trans>DELETE_ALL</Trans> */}
//               </button>

//               <input 
//                   type="checkbox" 
//                   checked={!this.state.disabled}
//                   onChange={this.onChangeDisabled}
//               />
//           </div>
//       );
//   }
// }

// MyComponent.propTypes = {
//   // initialDisabled: PropTypes.bool,
//   // onDeleteAll: PropTypes.func
// };

// MyComponent.defaultProps = {
//   onDeleteAll: () => {}
// };