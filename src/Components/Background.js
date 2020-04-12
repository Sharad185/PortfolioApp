import React, { Component } from 'react'
import Particles from 'react-particles-js'
import '../Css/Particle.css'
var style = {
  width: "100%",
  height: "90vh",
  position: "relative"

};
var style1 = {
  position: "absolute",
  left: "0",
  top: "25%",
  width: "100%",
  "text-align": "center",
  "font-size": "20px"



};
class Background extends Component {

  render() {

    return (
      <div className="Particle_div" id="1">
        <Particles
          params={{
            particles: {
              color: {
                value: "#FFFFFF"
              },
              line_linked: {
                color: {
                  value: "#000000"
                }
              },
              number: {
                value: 100
              },
              size: {
                value: 4
              }
            }, interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
        <div style={style1}><p className="intro_text"><b>Hello , I am <span className="Person_Name" >Sharad kumar</span><br />I'm a <span className="Person_Name" >full-stack</span> web developer.</b></p><div class="wrap">
          <button class="button">Resume</button>
        </div>
        </div>
   >
      </div>
    )
  }
}

export default Background
