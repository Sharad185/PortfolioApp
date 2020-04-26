import React, { Component } from 'react'
import '../Css/Dashboard.css'
import Menu from './Dashboard/Menu'
import About from './Dashboard/About'
import Skill from './Dashboard/Skill'
import Experience from './Dashboard/Experience'
import Header from './Dashboard/Header'
import { BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import {Link} from 'react-router-dom'

export class Dashboard extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
           redirect:false
      }

      this.logout=this.logout.bind(this);
  }
  
  logout()
  {
    localStorage.setItem('token','');
    localStorage.clear();
    this.setState({
        redirect:true
    })
  }
 componentWillMount()
 {
     if(localStorage.getItem('token'))
     {
         console.log("Login successs")
     }
     else{
         this.setState({
             redirect:true
         })
     }
 }

    render() {

         if(this.state.redirect)
         {
             return (<Redirect to={'/Login'}/>)
         }

        const {match}=this.props;
        return (
            <div>
                <div>
               <Header></Header>
               <div class="sidebar">
               <Link to={`${match.url}`} >Menu</Link>
               <Link to={`${match.url}/About`} >About</Link>
               <Link to={`${match.url}/Skill`} >Skill</Link>
               <Link to={`${match.url}/Experience`} >Experience</Link>
               <a onClick={this.logout} ><span class="glyphicon glyphicon-log-out"></span>Log Out</a>

               </div>
            

           <div class="content">
  
                   <Switch> 
                   <Route path={`${match.url}` }  exact component={Menu}></Route>
                   <Route path={`${match.url}/About`} component={About}></Route>
                   <Route path={`${match.url}/Skill`} component={Skill}></Route>
                   <Route path={`${match.url}/Experience`} component={Experience}></Route>
                   </Switch> 
            </div>
           

           </div>
            </div>
        )
    }
}


export default Dashboard


