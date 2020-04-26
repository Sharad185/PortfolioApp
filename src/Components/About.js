import React, { Component } from 'react'
import axios from 'axios'
import '../Css/About.css'
import { TweenLite, TimelineLite } from 'gsap';

export class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Abouts: []

        }
        this.myTween = new TimelineLite({ paused: false });
        this.myElements = [];
    }

    componentDidMount() {
        this.animation();

        this.fetchUser();
    }

    fetchUser() {
        axios.get('https://portfolio-api185-dev.herokuapp.com/About/').then(success => {
            this.setState({
                Abouts: success.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    animation() {

        this.myTween.staggerTo(this.myElements, 0.5, { y: 0, autoAlpha: 1 }, 0.1);

    }

    render() {
        return (
            <div className="About" id="2" >
                <h2 className="About_txt">About</h2>
                <p className="About_txt_des">Enhancing the Beauty of site</p>

                <div class="row" >
                    {
                        this.state.Abouts.map((about, index) => <div class="column" ref={div => this.myElements[index] = div}>
                            <div class="card">

                                <h3 className="About_text">{about.Tag}</h3>
                                <p className="About_descript">{about.description}</p>
                            </div>
                        </div>
                        )
                    }

                </div>

            </div>
        )
    }
}

export default About
