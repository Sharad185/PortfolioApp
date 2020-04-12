import React, { Component } from 'react'
import axios from 'axios'
import '../Css/Skill.css'

export class Skill extends Component {

constructor(props) {
    super(props)

    this.state = {
         Skills:[]
    }
}

componentDidMount(){
    axios.get('https://portfolio-api185-dev.herokuapp.com/skill/') .then((response)=>
    {
        console.log(response.data);
         this.setState({
           Skills:response.data
         })
    }).catch(err=>{
        console.log(err);
   })
}





    render() {
        return (
            <div id="3">
             <div class="container">
             <h2 className="Skill">Technical Skill</h2>
        <p>Exploring each and Evey day</p> 
        {
            this.state.Skills.map((Skill)=> <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:Skill.value}}>
          {Skill.SkillName}
        </div>
        </div>

            )
        }
        
       
</div>
</div>
        )
    }
}

export default Skill
