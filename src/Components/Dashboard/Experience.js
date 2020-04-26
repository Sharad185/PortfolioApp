import React, { Component } from 'react'
import '../../Css/Dashboard/Menu.css'
import { getDashboard } from '../../Services/getDashboard'
import Load from '../../Components/Dashboard/Load'

export class Experience extends Component {


    constructor(props) {
        super(props)

        this.state = {
            Exps: [],
            isloading:true

        }
    }

    componentDidMount() {

        const response = getDashboard('Experience');
        response.then((sucess) => {
            this.setState({
                Exps: sucess.data,
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
                    <h2 style={{ color: "red" }}>Experience Details </h2>
                    <p className="Menu_dash_desc">Edit the Experience Easily</p>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>CompanyName</th>
                                <th>profile</th>
                                <th>ActiveYear</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                



                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Exps.map((exp) => <tr>
                                    <td>{exp.CompanyName}</td>
                                    <td>{exp.profile}</td>
                                    <td>{exp.ActiveYear}</td>
                                    <td><a href="#" class="btn btn-info btn-lg">
                                        <span class="glyphicon glyphicon-eye-open"></span>
                                         </a>
                                    </td>

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

export default Experience
