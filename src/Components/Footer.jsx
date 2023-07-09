import React from 'react'
import '../Styles/Footer.css'
import { HashLink } from 'react-router-hash-link'


const Footer = () => {
  return (
    <footer>
        <main className='footer-main1'>
            <HashLink to="/#home"><h2>CODING-SHARK</h2></HashLink>
            <small>Solution For All Queries</small>
        </main>
        <main className='footer-main2'>
            <h4>SOCIAL MEDIA</h4>
            <a href="https://www.instagram.com/codingshark._/">Instagram</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <a href="https://www.twitter.com/">Twitter</a>
        </main>
    </footer>
  )
}

export default Footer
