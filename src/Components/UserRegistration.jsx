import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { addUser, getProducts } from '../Services/ServiceNew'

class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            product: [],
            value: '',
            checked: [],
            checkedItems: [],
            roleId: '',
            alert: { open: false, message: "", backgroundColor: "" },
            drwerOpen: true,
            allProductsId: [],
            disable : false,
            checkBoxs : false

        }
    }
    onChange = (e) => {
        const checkedItems = this.state.checkedItems
        let position
        if (e.target.checked) {
            checkedItems.push(+e.target.value)
        } else {

            position = checkedItems.indexOf(+e.target.value)
            checkedItems.splice(position, 1)
        }



        this.setState({
            checkedItems: checkedItems
        })
        console.log(this.state.checkedItems)
    }
    componentDidMount() {
        this.getAllTheProducts();

    }

    getAllTheProducts = () => {
        getProducts().then((res) => {
            if (res.status == '401') {
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('role')
                this.props.history.push('/')
              }
            else {
                console.log(res.clone().json())
                return res.json()
            }
        }).then((data) => {
            console.log(data)
            this.setState({
                product: data
            })

        })
        console.log('data---->', this.state.product)
        console.log("productId --- > ", this.state.product.id)



    }
    onChangeUserName = (event) => {
        var name = event.target.value;
        this.setState({
            userName: name,

        })
    }

    onChangeEmail = (event) => {
        var emailId = event.target.value;
        this.setState({
            email: emailId,

        })

    }
    onChangePassword = (event) => {
        var userPassword = event.target.value;
        this.setState({
            password: userPassword,

        })

    }

    handleDrawerOpen = () => {
        this.setState({
            drwerOpen: true
        })
    }
    handleChangeCheckBox = (event) => {
        this.setState = {
            checked: event.target.value
        }
    }
    handleProductData = () => {

    }
    saveData = () => {
        const userRegister = {
            "username": this.state.userName,

            "email": this.state.email,

            "password": this.state.password,

            "role_id": this.state.roleId,

            "product_id_list": this.state.checkedItems,


        }
        //  console.log("register", userRegistesr)
        //valid api calls and logout
        if (this.state.roleId == '1' || this.state.roleId == '2') {
            this.state.product.map((key) => {
                this.state.allProductsId.push(key.id)
            })
            console.log(this.state.allProductsId)
        }
        if (this.state.roleId == 1 || this.state.roleId == 2) {
            
            console.log("all products", this.state.allProductsId)
            addUser(this.state.userName, this.state.email, this.state.password, this.state.roleId, this.state.allProductsId).then((res) => {
                if (res.status == '401') {
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('role')
                    this.props.history.push('/')
                  }
                  else{
                    this.setState({        
                        alert: { open: true, message: "Account created successfully !!!", backgroundColor: "#5c5959" }
                    });
                console.log("data", res.clone().json())
                this.props.history.push('/Admin')
                  }
            })
        }
        if(this.state.roleId == 4 ){
            if( this.state.checkedItems.length == 1 ){
            addUser(this.state.userName, this.state.email, this.state.password, this.state.roleId, this.state.checkedItems).then((res) => {
                if (res.status == '401') {
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('role')
                    this.props.history.push('/')
                  }
                  else{
                    this.setState({        
                        alert: { open: true, message: "Successsfully account created", backgroundColor: "#5c5959" }
                    });
                console.log("data", res.clone().json())
                this.props.history.push('/Admin')
                  }
            })}
            else {
                this.setState({        
                    alert: { open: true, message: "Select one product only !!!", backgroundColor: "#5c5959" }
                });
            }
        }
            
        if(this.state.roleId == 3 ){
            if( this.state.checkedItems.length <= 2 ){
            addUser(this.state.userName, this.state.email, this.state.password, this.state.roleId, this.state.checkedItems).then((res) => {
                if (res.status == '401') {
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('role')
                    this.props.history.push('/')
                  }
                  else{
                    this.setState({        
                        alert: { open: true, message: "Successsfully account created", backgroundColor: "#5c5959" }
                    });
                console.log("data", res.clone().json())
                this.props.history.push('/Admin')
                  }
            })}
            else {
                this.setState({        
                    alert: { open: true, message: "Select only two product !!!", backgroundColor: "#5c5959" }
                });
            }
        }

    }
    handleRadioGroupChange = (value) => {
        console.log("roles---->", value)
        this.setState({
            roleId: value,
            
            
        })
        if(value == 1){
            this.setState({        
                alert: { open: true, message: "All products selected !!!", backgroundColor: "#5c5959" }
            });
        }
        if(value == 2){
            this.setState({        
                alert: { open: true, message: "All products selected !!!", backgroundColor: "#5c5959" }
            });
        }
        if(value == 3){
            this.setState({        
                alert: { open: true, message: "Select only two product !!!", backgroundColor: "#5c5959" }
            });
        }
        if(value == 4){
            this.setState({        
                alert: { open: true, message: "Select one product only !!!", backgroundColor: "#5c5959" }
            });
        }
       
    }
    handleDrawerClose = () => {
        this.setState({
            drwerOpen: false
        })
    }
    openDialogBox = () => {
        this.setState({
            openDialog: !this.state.openDialog,
        })
    }
    handleDrawerOpen = () => {
        if (this.state.drwaerOpen === false) {
            this.setState({
                drwaerOpen: true,
            })
        }
        else {
            this.setState({
                drwaerOpen: false,
            })
        }
    }

    disableProductSelection = () => {
        if (this.state.roleId == 1 || this.state.roleId == 2) {
            return true
        }


        else if(this.state.roleId == 4){
            console.log("productlength------>",this.state.checkedItems.length)
            if(this.state.checkedItems.length == 1)
            return true
        }
        else if(this.state.roleId == 3){
            if(this.state.checkedItems.length == 2)
            return true
        }
        else return false

    }

    render() {

        
        let dropdown = this.state.product.map((item, indx) => {
            return (item === null ? '' : <div key={indx}>
                <Checkbox value={item.id} onChange={this.onChange.bind(this)}  disabled={this.disableProductSelection()} />
                {item.product_name}
            </div>
            )
        })
        return (
            <div >
<Snackbar open={this.state.alert.open} message={this.state.alert.message} ContentProps={{
                    style:
                        { backgroundColor: this.state.alert.backgroundColor }
                }} anchorOrigin={{ vertical: "top", horizontal: "center" }}            
                    autoHideDuration={4000} 
                    onClose={() => this.setState({
                        alert: { open: false }
                     })}/>

                <div className="page">
                    <Card className="cardView">
                        <div>
                            <FormLabel component="role" style={{ fontWeight: 'bold', fontSize: 'large', textAlign: 'center' }}>Regiter user</FormLabel>
                        </div>
                        <div className="form-field">
                            <TextField
                                className="homepageostosub"
                                required
                                id="firstname"
                                label="Full Name"
                                type="text"
                                margin="normal"
                                variant="outlined"
                                value={this.state.userName}
                                onChange={this.onChangeUserName}
                                errorText={this.state.firstNameError}
                            />
                        </div>
                        <div className="form-field">
                            <TextField
                                className="homepageostosub"
                                required
                                id="email"
                                label="email"

                                type="email"
                                margin="normal"
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                errorText={this.state.emailError}


                            />

                        </div>

                        <div className="form-field">

                            <TextField
                                className="homepageostosub"
                                required
                                id="password"
                                label="password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                errorText={this.state.passwordError}
                            />

                        </div>

                        <div>

                            <FormControl component="fieldset">
                                <Card class="card">
                                    <div className="rules">Types Of Rules</div>
                                    <RadioGroup aria-label="role"  value={this.value} className="roleContents" row>
                                        <FormControlLabel value="1"  control={<Radio />} label="Admin" onClick={() => this.handleRadioGroupChange(1)} />
                                        <FormControlLabel value="3"   control={<Radio />} label="PM" onClick={() => this.handleRadioGroupChange(3)} />
                                        <FormControlLabel value="2"   control={<Radio />} label="Org_Lead" onClick={() => this.handleRadioGroupChange(2)} />
                                        <FormControlLabel value="4"   control={<Radio />} label="User" onClick={() => this.handleRadioGroupChange(4)} />
                                    </RadioGroup>
                                </Card>

                            </FormControl>
                        </div>

                        <Paper class="dropDown" >
                            <div className="heading">Add Products</div>
                            {dropdown}

                        </Paper>
                        <div className="buttons1">

                            <Button onClick={this.saveData} color='primary' variant="contained" >submit</Button>
                        </div>

                    </Card>
                </div>
            </div>
        )
    }
}
export default withRouter(UserRegistration)