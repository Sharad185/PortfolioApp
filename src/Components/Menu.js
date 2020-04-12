import React, { Component } from 'react'
import axios from  'axios'
import '../Css/Menu.css'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export class Menu extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            menus:[]
        
        }
    }
    
    componentDidMount(){
      axios.get('https://portfolio-api185-dev.herokuapp.com/menu/') .then((response)=>
      {
          console.log(response.data);
           this.setState({
             menus:response.data
           })
      }).catch(err=>{
           console.log(err);
      })
    }
    
    render() {
        return (


          <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        {
               this.state.menus.map((menu)=><li><Link 
               to={menu.Priority}
               spy={true} 
               smooth={true} 
               duration={500} 
               className='some-class' 
               activeClass='some-active-class'
               
             >{menu.catName}</Link></li>)
     
        }

        
      </ul>
      <ul class="nav navbar-nav navbar-right">
        
      </ul>
    </div>
  </div>
</nav>

        )
    }
}

export default Menu
