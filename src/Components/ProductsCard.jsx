import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';
import {getAllProductsCount} from '../Services/ServiceNew'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function RejectsCard(props) {
  const ip = "13.127.18.137"
  const [project, setProject] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [showData, setShowData] = React.useState(false);

  const handleAllProduct = () => {
    console.log(props);
     
    props.props.history.push("/GetAllProductsComponent")
    console.log("GetAllProducts");
  }
  

  useEffect(() => {
    getAllProductsCount().then((res)=>{
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
      setProject(key)
    }).catch((err)=>{
      
     
  })
   
  }, []);
  const handleShowData = () => {
    setShowData(!showData);
  };


  const classes = useStyles();
  return (
    <React.Fragment style={{textAlign:'center',fontSize:'30px'}}>
      <Title style={{textAlign:'center',fontSize:'30px'}}>Number of Products</Title>
      <Typography component="p" variant="h4" style={{textAlign:'center',fontSize:'30px'}}>

      </Typography><span><h2 style={{ color: "#5c5a56",fontWeight : '500'}}>{JSON.stringify(project)}</h2></span>
      <Typography color="textSecondary" className={classes.depositContext}></Typography>
    </React.Fragment>
  );
}