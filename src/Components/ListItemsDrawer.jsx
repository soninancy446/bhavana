import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import NotesIcon from '@material-ui/icons/Notes';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Button } from '@material-ui/core';
// import Dashboard from './Dashboard'

export default class ListItemsDrawer extends Component{
  constructor(props){
    super(props);
    this.state={
         isOpen:false
    }
  }
   
 render(){
    return(
      <div>
        
        <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
         
        </ListItemIcon>
        <ListItemText primary="Dashboard"  onClick={() => this.props.Dashboard()}
                  button />
      </ListItem>
      </div>
      <div>
      <ListItem button>
        <ListItemIcon>
          <NotesIcon />
        </ListItemIcon>
        <ListItemText primary="Products" onClick={() => this.props.AllProduct()}
                  button
                  key="Products" />               
      </ListItem>
      </div>
      <div>
      {sessionStorage.getItem('role')=== "admin" ? <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        
        <ListItemText primary="Admin"  onClick={() => this.props.Admin()}
                  button />
      </ListItem> : '' }
      </div>
      <div>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="About  Us"  onClick={() => this.props.AboutUs()}
                  button
                  key="About Us"/>
      </ListItem>
      </div>
      <div>
      <ListItem button>
        <ListItemIcon>
          <PowerSettingsNewIcon />
        </ListItemIcon>
        <ListItemText primary="Logout"  onClick={() => this.props.Logout()}
                  button />
      </ListItem>
      </div>
    </div>
    )
  }
}