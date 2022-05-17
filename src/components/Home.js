import React from 'react'
import img1 from "./home.png"
import './Home.css'

function Home() {
  return (
    <>
    <div class="home">
      <div class="heading">
        <h1><em>Online Code Editor</em></h1>
        <br/>
        <h4><em>A New Way to Code</em></h4>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.<br/>Lorem ipsum dolor sit amet</p>
      </div>
      <div class="heading">
        <img src={img1}/>
      </div>
    </div>
    </>
  )
}

export default Home
