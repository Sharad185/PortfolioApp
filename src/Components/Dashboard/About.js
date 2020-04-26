import React, { Component } from 'react'
import '../../Css/Dashboard/Menu.css'
import { getDashboard } from '../../Services/getDashboard'
import Load from '../../Components/Dashboard/Load'

export class About extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Abouts: [],
            isloading:true
        }
    }

    componentDidMount() {

        const response = getDashboard('About');
        response.then((sucess) => {
            this.setState({
                Abouts: sucess.data,
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
                    <h2 style={{ color: "red" }}>About Details </h2>
                    <p className="Menu_dash_desc">Edit the About Easily</p>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Description</th>
                                <th>Edit</th>
                                <th>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Abouts.map((About) => <tr>
                                    <td>{About.Tag}</td>
                                    <td>{About.description}</td>
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

export default About
