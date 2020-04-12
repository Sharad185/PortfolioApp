import React, { Component } from 'react'
import axios from 'axios'
import '../Css/About.css'
export class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Abouts:[]
        }
    }
    
    componentDidMount()
    {
        axios.get('https://portfolio-api185-dev.herokuapp.com/About/').then(success=>{
           this.setState({
               Abouts:success.data
           })
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div className="About" id="2">
                <h2 className="About_txt">About</h2>
                <p className="About_txt_des">Enhancing the Beauty of site</p>

              <div class="row">
                  {
                      this.state.Abouts.map((about)=> <div class="column">
                      <div class="card">
          
                  <h3 className="About_text">{about.Tag}</h3>
                  <p className="About_descript">{about.description}</p>
              </div>
            </div>
          )
                  }
           
</div>

            </div>
        )
    }
}

export default About
