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
// // import Typography from '@material-ui/core/Typography';
// // import AddCircleIcon from '@material-ui/icons/AddCircle';
// // import TextField from '@material-ui/core/TextField'
// // import Button from '@material-ui/core/Button';
// // import Popper from '@material-ui/core/Popper';
// // import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
// // import Fade from '@material-ui/core/Fade';
// // import Paper from '@material-ui/core/Paper';

// // const useStyles = makeStyles(theme => ({
// //   typography: {
// //     padding: theme.spacing(8),
// //   },
// // }));

// // export default function PopperPopupState() {
// //   const classes = useStyles();

// //   return (

// //     <PopupState variant="popper" popupId="demo-popup-popper">
// //       {popupState => (
// //         <div><AddCircleIcon variant="contained" color="primary" {...bindToggle(popupState)} style={{ fontSize: 50 }} />
// //           {/* <Button variant="contained" color="primary" {...bindToggle(popupState)}>
// //            Add Product
// //           </Button> */}
// //           <Popper {...bindPopper(popupState)} transition>
// //             {({ TransitionProps }) => (
// //               <Fade {...TransitionProps} timeout={350}>
// //                 <Paper  style={{width:'100%', 
// //         alignItems:'center',justifyContent:'center'}}>
// //                   <Typography className={classes.typography}><h3><b><div>
// //                     <TextField
// //                       id="outlined-textarea"
// //                       label="ProductName"
// //                       placeholder="Product"
// //                       multiline
// //                       variant="outlined"
// //                     />
// //                   </div></b></h3></Typography>
                 
// //                   <Button variant="contained" color="primary"  style={{width:'100%',height:40,backgroundColor:'Green', 
// //         alignItems:'center',justifyContent:'center'}}>Done</Button>
// //                 </Paper>
// //               </Fade>
// //             )}
// //           </Popper>
// //         </div>
// //       )}
// //     </PopupState>
// //   );
// // }
// // import React, { useState } from 'react';
// // import
// // export default function Quiz() {
// //     const [index, setIndex] = useState(1);

// //     const current = quiz.questions[index];
// //     return (
// //         <Content>
// //             <View style={styles.gutter}>
// //                 <View style={styles.container}>
// //                     <View style={styles.content}>
// //                         <Text>{current.question}</Text>
// //                     </View>
// //                     <Button
// //                         primary
// //                         label={quiz.answers.option1}
// //                         onPress={() => {
// //                             if (quiz.answers.option1 === current.rightAnswer) {
// //                                 setIndex(index + 1);
// //                             } else {
// //                                 console.log('Wrong');
// //                             }
// //                         }}
// //                     />
// //                     <Button
// //                         primary
// //                         label={quiz.answers.option2}
// //                         onPress={() => {
// //                             if (quiz.answers.option2 === current.rightAnswer) {
// //                               setIndex(index + 1);
// //                             } else {
// //                                 console.log('Wrong');
// //                             }
// //                         }}
// //                     />
// //                     <Button
// //                         primary
// //                         label={quiz.answers.option3}
// //                         onPress={() => {
// //                             if (quiz.answers.option3 === current.rightAnswer) {
// //                                 setIndex(index + 1);
// //                             } else {
// //                                 console.log('Wrong');
// //                             }
// //                         }}
// //                     />
// //                 </View>
// //             </View>
// //         </Content>
// //     );
// // }
// // import React, { Component } from 'react';

// // class Quiz extends Component {
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
// //           { this.state.show ? 'Hide number' :
// //            'Show number' }
// //           {/* { this.state.show ? 'Hide number' : 'Show number' } */}
// //         </button>
// //         { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
// //       </div>
// //     );
// //   }
// // }

// // export default Quiz;

// import React, { Component } from "react";
// import button from '@material-ui/core/button'

// class Quiz extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			opened: false,
// 		};
// 		// this.toggleBox = this.toggleBox.bind(this);
// 	}
  
// 	toggleBox=()=> {
// 		const { opened } = this.state;
// 		this.setState({
// 			opened: !opened,
// 		});
// 	}
//      handleApprove = (version_id) => {
//         // console.log("dataaaaa");
    
//         // // console.log(BranchId);
//         // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//         //   targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build/approve/'+props.location.state.VersionId; 
          
//         // fetch(proxyUrl + targetUrl)
//         //   .then(blob => blob.json())
//         //   .then(data => {
//         //     console.table(data);
//         //   })
//         //   .catch(e => { console.log(e); });
//         props.history.push("/BuildDetails")
//         alert(" Build Triggered Successfully..")
    
//       }
//        handleReject = (version_id) => {
       
//         // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//         //   targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build/reject/'+props.location.state.VersionId; ;
         
//         // fetch(proxyUrl + targetUrl)
//         //   .then(blob => blob.json())
//         //   .then(data => {
//         //     console.table(data);
//         //   })
//         //   .catch(e => { console.log(e); });
//           props.history.push("/BuildDetails");
//            alert("Rejection Updated!");
//       }
// 	render() {
// 		var { title, children } = this.props;
// 		const { opened } = this.state;

// 		if (opened){
// 			title ='Hide Vehicles';
// 		}else{
// 			title ='Show Vehicles';
// 		}

// 		return (
// 			<div className="box">
// 				<div className="boxTitle" >
//                     <button onClick={this.toggleBox}>Hello</button>
//                     <Button variant="contained" color="primary" onClick={() => handleApprove()}>Approve</Button>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" color="Secondary" onClick={() => handleReject()}>Reject</Button>
//             {/* <Button variant="contained" color="primary" onClick={value.properties_dict.download_url}>Download</Button> */}
// 					{title}
// 				</div>
// 				{opened && (					
// 					<div class="boxContent">
// 						{children}
// 					</div>
// 				)}
// 			</div>
// 		);
// 	}
// }

// export default Quiz;

