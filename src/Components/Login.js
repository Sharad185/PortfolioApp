import React, { Component } from 'react'
import '../Css/Login.css'
import {Redirect} from 'react-router-dom'
import {postdata} from '../Services/PostData'
export class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      email:"",
      password:"",
      redirect:false
    }

    this.onChange=this.onChange.bind(this);
  }
  


  
  submitHandler=(e)=>
{
  e.preventDefault();

  const response=postdata('login',this.state);
  response.then((success)=>{console.log(success.data.token)
  localStorage.setItem('token',JSON.stringify(success.data.token))
  this.setState({redirect:true})
}).catch((err)=>{
    console.log("Login Error")
  })  
}

onChange(e){
  this.setState({[e.target.name]:e.target.value})
  
}
  render() { 
    if(this.state.redirect)
    {
       return < Redirect to ={'/Dashboard'}/>

    }

    if(localStorage.getItem('token'))
    {
      return < Redirect to ={'/Dashboard'}/>
    }
 return (
      <div>
          <div className="LoginPage">
          <div class="container Login_div">
              <div className="Admin_panel"><h2>Admin Panel</h2></div>
  
  <form onSubmit={this.submitHandler}>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="text"  name="email" class="form-control" placeholder="Enter email"  onChange={this.onChange}/>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" name="password" class="form-control"  placeholder="Enter password" onChange={this.onChange} />
    </div>
    
    <button type="submit"  class="btn btn-login">Submit</button>
  </form>
</div>

         </div>
      </div>
    )
  }
}

export default Login

