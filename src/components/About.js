import React from 'react'
import img1 from "./static/about.png"
import './static/About.css'

function About() {
	return (
		<>

			<div className="about">
				<div className="about-heading">
					<h1><em>About Us</em></h1>
					<br />
					<div className="about-box">
						<h4><em>Lorem ipsum dolor sit amet, consectetur adipisicing</em></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.Lorem ipsum dolor sit amet, consectetur adipisicing
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat</p>
					</div>
				</div>
				<div className="about-image-box">
				<img src={img1} alt="" />
				</div>
			</div>

		</>
	)
}

export default About
