import './style.css';
import './style_mobile.css'
import png from '../../css/logo.png'
export default function Contact () {

 return (
  <div>
   <svg className='intro' viewBox='-20 0 400 30'>
    <text className='contact__text text-stroke' textAnchor='start' x='10' y='20' clipPath='url(#contact__promo_text)'>Наши номера телефонов:</text>
    <text className='contact__text text-stroke text-stroke-2' textAnchor='start' x='10' y='20' clipPath='url(#contact__promo_text)'>Наши номера телефонов:</text>
    <defs>
     <clipPath id='contact__promo_text'>
      <text className='contact__text' textAnchor='start' x='10' y='20'>Наши номера телефонов:</text>
     </clipPath>
    </defs>
   </svg>
   <div className='contact__main flex_block'>
    <div className='contacts__panel'>
     <p className='contact__number-label'>Номер Жениха (если кто-то забыл, то Александр)</p>
     <a className='contact__number-link' href='tel:+375291146069'>+375(29)114-60-69</a>
     <p className='contact__number-label'>Номер Невесты (если кто-то забыл, то Яна)</p>
     <a className='contact__number-link' href='tel:+375445511104'>+375(44)551-11-04</a>
    </div>
    <img className='logo' src={png} alt="Logo"/>
   </div>
  </div>
 )
}
