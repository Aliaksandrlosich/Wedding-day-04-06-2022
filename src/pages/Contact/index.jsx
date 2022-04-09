import './style.css';
import './style_mobile.css'
export default function Contact () {

 return (
  <div>
   <svg className='intro' viewBox='-20 0 400 30'>
    <text textAnchor='start' x='10' y='20' className='contact__text text-stroke' clipPath='url(#contact__promo_text)'>Наши номера телефонов:</text>
    <text textAnchor='start' x='10' y='20' className='contact__text text-stroke text-stroke-2' clipPath='url(#contact__promo_text)'>Наши номера телефонов:</text>
    <defs>
     <clipPath id='contact__promo_text'>
      <text textAnchor='start' x='10' y='20' className='contact__text'>Наши номера телефонов:</text>
     </clipPath>
    </defs>
   </svg>
   <div className='contacts__panel'>
    <p className='contact__number-label'>Номер Жениха (если кто-то забыл, то Александр)</p>
    <a href='tel:+375291146069' className='contact__number-link'>+375(29)114-60-69</a>
    <p className='contact__number-label'>Номер Невесты (если кто-то забыл, то Яна)</p>
    <a href='tel:+375445511104' className='contact__number-link'>+375(44)551-11-04</a>
   </div>
  </div>
 )
}
