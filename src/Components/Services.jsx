import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../Styles/Services.css'

const Services = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={2000} axis='y' transitionTime={1000}>
        <div>
          <img src="/Images/1img.jpg" alt="image1" />
          <p className='legend'>IT Support</p>
        </div>
        <div>
          <img src="/Images/2img.jpg" alt="image2" />
          <p className='legend'>Telecomunication</p>
        </div>
        <div>
          <img src="/Images/3img.jpg" alt="image3" />
          <p className='legend'>Corporate Support</p>
        </div>
        <div>
          <img src="/Images/4img.jpg"  alt="image4" />
          <p className='legend'>Social Media</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
