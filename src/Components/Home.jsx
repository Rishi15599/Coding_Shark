import React from 'react'
import '../Styles/Home.css'
import {AiFillGoogleCircle, AiFillInstagram, AiFillAmazonCircle} from "react-icons/ai"
import {SiFlipkart} from "react-icons/si"

const Home = () => {
  return (
    <div>
      <div className='home1' id='home'>
        <div className='home1-inner'>
          <h1>CODING-SHARK</h1>
          <p>Solution for All Quaries</p>
        </div>
      </div>
      <main className='main' id='about'>
        <div className='home2' >
          <h1>About</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium maxime doloremque non, <br></br> ab perferendis nihil debitis cupiditate quae nisi sed libero culpa impedit,<br></br> magnam a enim corrupti reprehenderit. Consequatur, error?</p>
          <button className='btn'>Read More...</button>
        </div>
      </main>

      <div className='home3' id='brands'>
        <div className='home3-inner'>
          <h1>BRANDS</h1>
          <div className='brands'>
            <div className='brand' style={{animationDuration:"1s",animationDelay:"0.25s"}}>
              <AiFillGoogleCircle  className='icon'/>
              <p>Google</p>
            </div>
            <div className='brand' style={{animationDuration:"1s",animationDelay:"0.5s"}}>
              <AiFillInstagram  className='icon'/>
              <p>Instagram</p>
            </div>
            <div className='brand' style={{animationDuration:"1s", animationDelay:"0.75s"}}>
              <AiFillAmazonCircle  className='icon'/>
              <p>Amazon</p>
            </div>
            <div className='brand' style={{animationDuration:"1s", animationDelay:"1s"}}>
              <SiFlipkart   className='icon'/>
              <p>Flipkart</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
