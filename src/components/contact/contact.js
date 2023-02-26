import React from 'react';
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import './contact.css'

const Contact = () => {
  return (
    <div className='Home'>

    <div className='header'>
        <Navbar />
    </div>
    <div className='content'>
      <div className='contact-info-container'>
        <div className='met-info'>
          <h2>Contact Information</h2>
            <h3>The MET Museum</h3>
            <p>Address: 1000 Fifth Avenue, New York, NY 10028</p>
            <p>Phone: (212) 535-7710</p>
            <p>Email: information@metmuseum.org</p>
        </div>

        <div className='supinfo-info'>
          <h3>Supinfo</h3>
          <p>Address: 5 Rue Charles Fourier, 91000 Évry-Courcouronnes, France</p>
          <p>Phone: +33 1 60 87 06 60</p>
          <p>Email: contact@supinfo.com</p>
        </div>
      </div>
    </div>
    <div>
        <Footer />
    </div>
</div>
  );
};

export default Contact;
