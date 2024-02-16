import React from 'react'
import "../Styles/About.css"
import bg15 from "../Assets/bg15.jfif"
const About = (props) => {
  return (
    <div className={props.divName}>
      <div className='left-div'>
        <img src={bg15}/>
      </div>
      <div className='right-div'>
        <h1>Meet Hazik</h1>
        <h3>About Me And This App</h3>
        <p> I am a highly skilled software engineer and the brilliant mind behind this exceptional food recipe app. With a keen eye for detail and a passion for culinary innovation, I have seamlessly blended this expertise in software development to create a user-friendly and feature-rich application. As the developer of this app, I have not only crafted a seamless digital experience but also ensured that users can effortlessly navigate and discover delightful recipes. My commitment to excellence is evident in every line of code, making this app a testament to his prowess in the world of software engineering.</p>
      </div>
    </div>
  )
}

export default About