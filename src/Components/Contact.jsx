import React from 'react'
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className='contact-inner'>
        <form action="">
          <div className='form-group'>
            <label>Fullname</label>
            <input type="text" placeholder='Fullname' />
          </div>
          <div className='form-group'>
            <label>Email Id</label>
            <input type="email" placeholder='Email Id' />
          </div><div className='form-group'>
            <label>Phone</label>
            <input type="text" placeholder='Phone' />
          </div><div className='form-group'>
            <label>Any Queries</label>
            <input type="text" placeholder='Tell us about your Query' />
          </div>
          <div className='form-submit'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
