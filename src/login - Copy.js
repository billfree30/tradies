import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import fetch from 'isomorphic-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


//Promise.polyfill(); 

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
                    username:'Bill',
                    password:'P@ssword09',
                    cred:"false",
                    logError: false,
                    Recs: null,
                    Result:'',
        }
      
    }

    _logo(){
        var currentLogo = document.getElementById("workflowLogo");
        console.log(currentLogo);
            currentLogo.classList.add('Spanned');
     setTimeout(()=>{
       currentLogo.classList.remove("Spanned");
    },15000)
}

_checkRes(){
    alert("here")
    alert(this.state.cred)
    if(this.state.cred == true){
    alert("Valid")
    }else if (this.state.cred == false){
        this.setState({logError:true})
        // alert("incorrect")
    }else{
        // alert("No state")
        this.setState({logError:true})
    }
}
    GetLogin(){

          // alert(this.state.username);
  //          alert(this.state.password);
  var ress = "";

     
            
                //alert(credString);
                     fetch("http://localhost:3001/login/"+ this.state.username + "/" + this.state.password )
                     .then(response => response.json())
                     .then(json =>this.setState({cred:json}))
                     .then(res=>this._checkRes())
                     
                    // fetch('https://jsonplaceholder.typicode.com/posts/1')
                    // .then(response => response.json())
                    // .then(json => console.log(json))
// if(this.state.cred == "Success"){
//     alert("Passed")
        
//     }else{
//         alert("Failed")
   // }
}
resetCred(){
    alert("here");
    this.setState({logError: false})
}

_renderLogin(){
        if(this.state.logError === false){
            return(
                <div>
                    <TextField hintText="Username" value={this.state.username} onChange={this._handleUsername.bind(this)} />
                        <TextField hintText="Password" type='password' value={this.state.password} onChange={this._handlePassword.bind(this)}/>
                </div>
            )
                
        }else{
            
                return(
                    
                    <div>
                        
                        <TextField hintText="Username" value={this.state.username} onChange={this._handleUsername.bind(this)} errorText=""/>
                        <TextField hintText="Password" inputStyle={{margin: 0}} type='password' value={this.state.password} onChange={this._handlePassword.bind(this)} errorText="Incorrect Username or Password"/>
                    </div>
                )
            }
        }
        
    
_handlePassword(event, index, value){
    this.setState({password: event.target.value})
    this.setState({logError: false})
}
_handleUsername(event, index, value){
    this.setState({username: event.target.value})
    this.setState({logError: false})
}

    render() {
        return ( 
          <MuiThemeProvider>
            <div className="login-page">
            <div  className="login-card">
                 <div className="login-logo " >
                 </div>
                     <div className="Login-form">
                         <div className="login-label">Login</div>

                         {this._renderLogin()}
                        
                        
                        <button id="loginCard"  onClick={this.GetLogin.bind(this)}>ENTER</button>
                    
                      </div>
                 </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default Login;