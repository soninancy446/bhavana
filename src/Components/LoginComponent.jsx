import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core';
import { login } from '../Services/ServiceNew'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
            Error: false,
            alert: { open: false, message: "", backgroundColor: "" },
            name: "",
            hi : false,
            currentDate: '',
            currentTime : ''
        }
    }
    handleUserChange = (event) => {
        var emailId = event.target.value;
        this.setState({ email: emailId })
        console.log("email");

    }
    handlePasswordChange = (event) => {
        var password = event.target.value;
        this.setState({ password: password })
        console.log("password");

    }


    handleSubmit = () => {
        login(this.state.email, this.state.password).then(res => {

            console.log(res.clone().json())
            return res.json()
            //this.props.history.push('/Dashboard')
        }).then((key) => {
            console.log(key)
            if (key === 'Invalid user') {
                this.setState({
                    
                    alert: { open: true, message: "something went wrong, please check "+sessionStorage.getItem('name'), backgroundColor: "#ba0d04" }
                });
                console.log("new object",this.state.alert)
                this.state.props.history.push('/')
            }
            else {
                this.setState({
                    token: key.token,
                    role: key.role,
                    name: key.username
                })
                console.log("token-- ", this.state.token)
                console.log("role-- ", this.state.role)
                console.log("firstname", this.state.name)
                sessionStorage.setItem("token", this.state.token)
                sessionStorage.setItem('role', this.state.role)
                sessionStorage.setItem('name', this.state.name)
                var date=new Date().getDate()
                var month=new Date().getMonth()+1
                var year=new Date().getFullYear();
 
                // var hour=new Date().getHours();
                // var minutes=new Date().getMinutes
               /// var seconds=new Date().getSeconds()


                this.setState({
                    currentDate : year+'-'+month+'-'+date

                 })
                 sessionStorage.setItem('currentdate',this.state.currentDate)
                 sessionStorage.setItem('currentime',this.state.currentTime)
                this.props.history.push('/Dashboard')
            }

        }).catch((err) => {
            //this.props.history.push('/Dashboard')
            console.log("eror-->", err)
            this.setState({

                message: '',
                email: '',
                password: '',
            });
        })
    }



    // onClose={() => this.state.alert({ ...alert, open: false })}

    render() {
        return (
            <div>
                <Snackbar open={this.state.alert.open} message={this.state.alert.message} ContentProps={{
                    style:
                        { backgroundColor: this.state.alert.backgroundColor }
                }} anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    
                    autoHideDuration={2000} 
                    onClose={() => this.setState({
                        alert: { open: false }

                     })}/>
                <AppBar position="static" className="title">
                    <Toolbar><h1 >Bhavana Devops</h1></Toolbar></AppBar>
                <div className="login" title="Login">
                    <div className="mainlogin">
                        <div>
                            <TextField id="outlined-basic" label="Username" variant="outlined"
                                value={this.state.email}
                                type="email"
                                onChange={this.handleUserChange}
                            />
                        </div>
                        <br />
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined"
                                value={this.state.password}
                                type="password"
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <span style={{ color: "#b71c1c" }}>{this.state.message}</span>
                        <div className="Button">
                            <Button onClick={() => this.handleSubmit()} color='primary' variant="contained" >Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;