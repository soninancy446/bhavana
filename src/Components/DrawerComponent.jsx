// import React, { Component } from "react";
// import { IconButton, Drawer, createMuiTheme,List,ListItem, ListItemIcon,} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import ListItemText from "@material-ui/core/ListItemText";
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import PeopleIcon from '@material-ui/icons/People';
// import NotesIcon from '@material-ui/icons/Notes';


// const theme = createMuiTheme({
//   overrides: {
//     MuiDrawer: {
//       paper: {
//         marginTop: "70px",
//         width: "20%"
//       }
//     }
//   }
// });

// export class DrawerComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       open: false,
//       AnchorEl: null,
//       allLable: []
//     };
//   }
//   handleDrawer = event => {
//     const { currentTarget } = event;
//     this.setState({
//       AnchorEl: currentTarget,
//       open: !this.state.open
//     });
//   };

  
//   render() {
//     let open = this.state.open;
//     return (
//       <div>
//         <MuiThemeProvider theme={theme}>
//           <IconButton onClick={this.handleDrawer}>
//             <MenuIcon />
//           </IconButton>
//           <div style={{ textAlign: "initial" }}>
//             <Drawer variant="persistent" anchor="left" open={open}>
//               <List>
//                 <ListItem  className="over"
//                   onClick={() => this.props.Dashboard()}
//                   button
//                   key="Deshboard"
                
//                 >
//                   <ListItemIcon>
//                   <DashboardIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Dashboard" />
//                 </ListItem>
//                 <ListItem  className="over"
//                   onClick={() => this.props.AllProduct()}
//                   button
//                   key="Products"
//                 >
//                   <ListItemIcon>
//                     <NotesIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Products" />
//                 </ListItem>
//                 <ListItem  className="over"
//                   onClick={() => this.props.AboutUs()}
//                   button
//                   key="About Us"
//                 >
//                   <ListItemIcon>
//                   <PeopleIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="About Us" />
//                 </ListItem>
                
//               </List>
//             </Drawer>
//           </div>
//         </MuiThemeProvider>
//       </div>
//     );
//   }
// }


// export default  (DrawerComponent);