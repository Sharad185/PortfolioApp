import React, { Component } from 'react'
import axios from 'axios'
import '../Css/Experience.css'
export class Experience extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Experiences:[]
        }
    }
    
    componentDidMount()
    {
        axios.get('https://portfolio-api185-dev.herokuapp.com/Experience/').then(success=>{
           this.setState({
            Experiences:success.data
           })
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div className="About" id="4">
                <h2 className="About_txt">Experience</h2>
                <p className="About_txt_des">Learning Day by Day</p>

              <div class="row">
                  {
                      this.state.Experiences.map((experience)=> <div class="column">
                      <div class="card">
          
                  <h3 className="About_text">{experience.CompanyName}</h3>
                  <p className="About_descript">{experience.profile}</p>
                  <p className="About_descript">ActiveYear : {experience.ActiveYear}</p>
                  <p className="About_descript">Duration : {experience.duration}</p>
                  <p className="About_descript">Domain : {experience.Domain}</p>
                  <p className="About_descript">TechStack :  {experience.TechStack}</p>
                  <p className="About_descript">Projects :  {experience.Projects}</p>


              </div>
            </div>
          )
                  }
           
</div>

            </div>
        )
    }
}

export default Experience
