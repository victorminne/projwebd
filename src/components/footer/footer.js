import './footer.css';
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <div className='footer'>
        <div className="footer-info">
          <h3>Visit Us</h3>
          <p>123 Main Street</p>
          <p>New York, NY 10001</p>
          <p>Phone: (555) 555-5555</p>
          <p>Email: info@museum.com</p>
        </div>
        <div className="wrapper">
          <div className="button">
            <div className='icon'>
              <i className="fab fa-facebook-f"></i>
            </div>
          </div>

          <div className="button">
            <div className='icon'>
              <i className="fab fa-twitter"></i>
            </div>
          </div>

          <div className="button">
            <div className='icon'>
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          <div className="button">
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <div className='icon'>
              <i className="fab fa-youtube"></i>
            </div>
            </a>
          </div>
          
        </div>
        <p>&copy; 2023 Museum. All Rights Reserved.</p>
      </div>
    </footer>

  )
}

export default Footer