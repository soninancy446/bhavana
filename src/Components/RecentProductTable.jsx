import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import {getLatestBuilds,getApprovedBuilds,getRejectedBuilds} from '../Services/ServiceNew'
const rows = [];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  fixedHeight: {

    height: 260,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  
}));


export default function RecentProductTable(props) {
  const ip = "13.127.18.137"
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [project, setProject] = React.useState([]);
  const[Build,setBuild]=React.useState([]);
  const[RejectBuild,setRejectBuild]=React.useState([]);
  const [show, setShow] = React.useState(false);
  const [showData, setShowData] = React.useState(false);

  

  useEffect(() => {
    getLatestBuilds().then((res)=>{
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
      setProject(key);
    }).catch((err)=>{
      
  })}, []);
  useEffect(() => {
    getApprovedBuilds().then((res)=>{
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
      setBuild(key)
    }).catch((err)=>{
      
  })
  }, []);
  useEffect(() => {
    getRejectedBuilds().then((res)=>{
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
      setRejectBuild(key)
      console.log("key------->",key)
    }).catch((err)=>{
      
  })

   
   
  }, []);
  
  const handleShowData = () => {
    setShowData(!showData);
  };
const preventDefault=()=>{
  props.props.history.push("/BuildData");
}
  
  return (
    
    <React.Fragment>
      <div style={{display:'flex',flexDirection:'row',padding:'2px',margin:'3px',justifyContent:"space-between"}}>
        {console.log(project.lentgh)}
        <Grid item xs={12} md={5} lg={4} >
              <Paper className={fixedHeightPaper}>
      <Title>Recent Builds</Title> <Typography color="textSecondary" className={classes.depositContext}></Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell>Builds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {project === 'Token Expired..!!' ? '': project.map(row => ( 
            <TableRow key={row.id}>
              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.build_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table></Paper></Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Grid item xs={12} md={3} lg={4}>
              <Paper className={fixedHeightPaper}> <Title>Approved Builds</Title>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Products</TableCell>
            <TableCell>Builds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Build === 'Token Expired..!!' ? '' : Build.map(row => ( row === null ? '':
            <TableRow key={row.id}>
              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.build_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table></Paper></Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Grid item xs={12} md={3} lg={4}>
        <Paper className={fixedHeightPaper}> <Title>Rejected Builds</Title>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Products</TableCell>
            <TableCell>Builds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RejectBuild === 'Token Expired..!!' ? '' : RejectBuild.map(row => ( row === null ? '':
            <TableRow key={row.id}>

              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.build_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table></Paper></Grid></div>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Builds
        </Link>
      </div> */}
      
    </React.Fragment>
  );
}