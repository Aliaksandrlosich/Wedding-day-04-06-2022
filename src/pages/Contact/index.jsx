import PromoText from '../../components/promoText/index'

import logo from '../../css/logo.png'

import './style.css';
import './style_mobile.css'

export default function Contact () {

 return (
  <div>
   <PromoText text='Наши номера телефонов'/>
   <div className='contact__main flex_block'>
    <div className='contacts__panel'>
     <p className='contact__number-label'>Номер Жениха (если кто-то забыл, то Александр)</p>
     <a className='contact__number-link' href='tel:+375291146069'>+375(29)114-60-69</a>
     <p className='contact__number-label'>Номер Невесты (если кто-то забыл, то Яна)</p>
     <a className='contact__number-link' href='tel:+375445511104'>+375(44)551-11-04</a>
    </div>
    <img className='logo' src={logo} alt="Logo"/>
   </div>
  </div>
 )
}
