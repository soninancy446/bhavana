import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';
import {getBuildsCount} from '../Services/ServiceNew'
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});
export default function BuildsCard(props) {
  const [project, setProject] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [showData, setShowData] = React.useState(false);

  useEffect(() => {
console.log("here is props",props)
    getBuildsCount().then((res)=>{
      if (res.status == '401') {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('role')
        props.history.push('/')
    }
    else {
        console.log(res.clone().json())
        
        return res.json()
    }
    }).then((key)=>{
      console.log("key-->",key)
      console.log("key-->",key)
      setProject(key)
      sessionStorage.setItem('numberofbuilds',key)
      console.log("key-->",project)
    }).catch((err)=>{
      
  })
  },[]);

  const handleShowData = () => {
    setShowData(!showData);
  };
 
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Number of Builds</Title>
      <Typography component="p" variant="h4">

      </Typography><span><h2 style={{ color: "#5c5a56",fontWeight : '500'}}>{JSON.stringify(project)}</h2></span>
      <Typography color="textSecondary" className={classes.depositContext}></Typography>
     
    </React.Fragment>
  );
}