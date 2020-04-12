import React, { Component } from 'react'
import '../Css/Connect.css'
import imagefb from '../facebook.png'
import imagelinkdn from '../linkedin.png'
import imagegithub from '../github.png'
import imageskype from '../skype.png'

export class Connect extends Component {
    render() {
        return (
            <div className="Connect" id="6">
                <div className="Connect_icon">
                    <img src={imagefb} className="connect_image" alt="Cinque Terre" style={{ width: "64px", height: "64px" }} />
                    <img src={imagelinkdn} className="connect_image" alt="Cinque Terre" style={{ width: "64px", height: "64px" }} />
                    <img src={imagegithub} className="connect_image" alt="Cinque Terre" style={{ width: "64px", height: "64px" }} />
                    <img src={imageskype} className="connect_image" alt="Cinque Terre" style={{ width: "64px", height: "64px" }} />
                </div>
                <div className="Quotes">
                    <p className="Quotes_Para">If the code and the comments do not match, possibly both are incorrect. — Norm Schryer</p>
                </div>
            </div>
        )
    }
}

export default Connect
