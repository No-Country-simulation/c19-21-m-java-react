import React from 'react'
import './Footer.css'
import footerLogo from './assets/letspet-png.png'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <div className='footer-col'>
        <img className='footer-logo' src={footerLogo} alt="Logo Let's Pet" />
        <h2 className='footer-title'>
          Lets Pet</h2>
        </div>
        <div className="footer-col col-2">
          <p>
            Lets Pet S.R.L
          </p>
          <p>
            Calle Falsa 123, Buenos Aires, Argentina
          </p>
        </div>
        <div className="footer-col">PONGA SU PUBLICIDAD AQUI</div>
      </footer>
    </div>
  )
}

export default Footer;
