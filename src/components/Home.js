import React from 'react'
import img1 from "./static/home.png"
import './static/Home.css'

function Home() {
  return (
    <>
      <div className="home">
        <div className="heading">
          <h1><em>Online Code Editor</em></h1>
          <br />
          <div className="box">
            <h4><em>A New Way to Code</em></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br />
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br />
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.<br />Lorem ipsum dolor sit amet</p></div>
        </div>
        <div className="image-box">
          <img src={img1} alt="" />
        </div>
      </div>

    </>
  )
}

export default Home
