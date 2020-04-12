import React, { Component } from 'react'
import '../Css/Image.css'
import image from '../Sharad1.jpg'
const style = {
    height: 200,
    width: 200
}
export class Image extends Component {
    render() {
        return (
            <div  >
                <div class="row_Image">
                    <div class="column_Image" >
                        <img src={image} class="img-circle" alt="Cinque Terre" style={{ width: "150px", height: "170px" }} />

                    </div>
                    <div class="column_Image" >
                        <p className="write_txt">I'm passionate Full Stack Developer who believes in building beautiful UI with robust, scalable backends. I have realized the power of giving back to community, hence started contributing to Open Source. I am currently fascinated by JavaScript ecosystem.</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Image
