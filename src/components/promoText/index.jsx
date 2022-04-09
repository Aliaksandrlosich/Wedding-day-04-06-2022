import './style.css'

export default function promoText ({ text }) {

 return (
  <svg className='intro' viewBox='-20 0 400 30'>
   <text className='contact__text text-stroke' textAnchor='start' x='10' y='20' clipPath='url(#contact__promo_text)'>{text}</text>
   <text className='contact__text text-stroke text-stroke-2' textAnchor='start' x='10' y='20' clipPath='url(#contact__promo_text)'>{text}</text>
   <defs>
    <clipPath id='contact__promo_text'>
     <text className='contact__text' textAnchor='start' x='10' y='20'>{text}</text>
    </clipPath>
   </defs>
  </svg>
 )
}
