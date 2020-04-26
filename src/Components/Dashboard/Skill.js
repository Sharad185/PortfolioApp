import React, { Component } from 'react'
import '../../Css/Dashboard/Menu.css'
import { getDashboard } from '../../Services/getDashboard'
import Load from '../../Components/Dashboard/Load'

export class Skill extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Skills: [],
            isloading:true

        }
    }

    componentDidMount() {

        const response = getDashboard('skill');
        response.then((sucess) => {
            this.setState({
                Skills: sucess.data,
                isloading:false
            })
            console.log(this.Abouts)
        }).catch(er => {
            console.log(er)
        })

    }

    render() {

        if(this.state.isloading)
        {
            return(
              <div className="Loader_div">
                 <Load></Load>
              </div>  
            )
        }

        return (
            <div>
                <div class="container dashboard">
                    <h2 style={{ color: "red" }}>Skills Details </h2>
                    <p className="Menu_dash_desc">Edit the Skills Easily</p>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>SkillName</th>
                                <th>value</th>
                                <th>Edit</th>
                                <th>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Skills.map((skill) => <tr>
                                    <td>{skill.SkillName}</td>
                                    <td>{skill.value}</td>

                                    <td>
                                        <a href="#" style={{ backgroundColor: "green", border: "none" }} class="btn btn-info btn-lg">
                                            <span class="glyphicon glyphicon-pencil"></span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" style={{ backgroundColor: "red", border: "none" }} class="btn btn-info btn-lg">
                                            <span class="glyphicon glyphicon-trash"></span>
                                        </a>
                                    </td>

                                </tr>


                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Skill
