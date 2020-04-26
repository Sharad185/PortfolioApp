import React, { Component } from 'react'
import '../../Css/Dashboard/Menu.css'
import { getDashboard } from '../../Services/getDashboard'
import Load from '../../Components/Dashboard/Load'

export class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menus: [],
            isloading:true
        }
    }

    componentDidMount() {

        const response=getDashboard('menu');
         response.then((sucess)=>
         {
             this.setState({
                 menus:sucess.data,
                 isloading:false
             })
         }).catch(er=>{
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
                    <h2 style={{ color: "red" }}>Menu Details </h2>
                    <p className="Menu_dash_desc">Edit the Menu Easily</p>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Menu Priority</th>
                                <th>Menu Name</th>
                                <th>Edit</th>
                                <th>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.menus.map((menu) => <tr>
                                    <td>{menu.Priority}</td>
                                    <td>{menu.catName}</td>
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

export default Menu
