import { HiMail } from 'react-icons/hi'
import { FaHeadset, FaReact } from 'react-icons/fa'
import './Footer.scss'

function Footer () {
  return (
    <div className='footer'>
      <div className='footer__location'>
        <h3>Location</h3>
        <hr />
        <ul className='footer__location--text'>
          <li className='footer__location--text-item'>C/Valle de Alcudia, 3 Edificio 2, 1ª Plta.</li>
          <li className='footer__location--text-item'>Madrid Headquarters </li>
          <li className='footer__location--text-item'>compras@atsistemas.com</li>
          <li className='footer__location--text-item'>(+34) 634 888 000</li>
        </ul>
      </div>
      <div className='footer__contact'>
        <div className='footer__contact--btns'>
          <a href='https://www.linkedin.com/in/johnnatanreyes/'>
            <button><HiMail />CONTACT</button>
          </a>
          <a href='https://github.com/tanamix22'>
            <button><FaHeadset /> SPEAK WITH AN AGENT</button>
          </a>
        </div>
      </div>
      <div className='footer__branding'>
        <ul className='footer__branding--list'>
          <li className='footer__branding--list-text'>
            <p>Developed for</p>
            <p>JOHNNATAN</p>
          </li>
          <li className='footer__branding--list-text'>
            <p>Powered by</p>
            <FaReact /> REACT
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
