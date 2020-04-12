import React, { Component } from 'react'
import '../Css/Contact.css'
class Contact extends Component {
    render() {
        return (
            <div className="Contact" id="5">
                 <h2 className="Contact_txt">Contact Us</h2>
                  <p className="Contact_txt_des">Have a question or want to work together?</p>
                <div className="Form">
                <div class="row_contact">
      
      <div class="col-75">
        <input className="Name" type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>

    </div>

    <div class="row_contact">
      
      <div class="col-75">
        <input className="Name" type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
      
    </div>


    <div class="row_contact">
      
      <div class="col-75">
        <textarea className="textArea" id="subject" name="subject" placeholder="Write something.." style={{height:"100px"}}></textarea>
      </div>
    </div>

    <div class="row_contact">
    <button type="button" class="btn btn-danger"> Submit </button>
    </div>
                </div>

            </div>
        )
    }
}

export default Contact
