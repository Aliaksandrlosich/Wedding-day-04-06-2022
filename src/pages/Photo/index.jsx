import PromoText from '../../components/promoText'

import './style.css'
import photo from '../../css/photo_wedding.jpg'

export default function Photo () {

 return (
  <div>
   <PromoText text='Фото'/>
   <div className='photo__main flex_block'>
    <div className='photo__texts-panel'>
     <h2 className='photo-page__text'>Уважаемые гости!</h2>
     <p className='photo-page__text'>На свадьбе, будет работать профессиональный фотограф. Так же, будет фотозона в
      банкетном дворике.</p>
     <p className='photo-page__text'>Фотографии будут через пару месяцев, после свадьбы. </p>
     <p className='photo-page__text'>Храниться будут на диске. Каждый желающий, сможет найти себя, и скачать
      фото. Даже не нужно будет идти к нам в гости, что бы посмотреть!)</p>
     <a className='photo__link' href='https://disk.yandex.by/d/KjYUU-pltn1MVg' target="_blank">Ссылка на фотографии</a>
    </div>
    <img className='photo' src={photo} alt="Photo"/>
   </div>
  </div>
 )
}
