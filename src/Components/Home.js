import React from 'react'
import Menu from './Menu';
import Background from './Background'
import Border from './Border'
import Skill from './Skill';
import About from './About';
import Experience from './Experience'
import Image from './Image'
import Contact from './Contact';
import Connect from './Connect';
function Home() {
    return (
        <div>
    <Menu></Menu>
    <Border></Border>
    <Background></Background>
    <About></About>
    <Image></Image>
    <Skill></Skill>
    <Experience></Experience>
    <Contact></Contact>
    <Connect></Connect>
        </div>
    )
}

export default Home
