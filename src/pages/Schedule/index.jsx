import png from '../../oops.jpg'
import PromoText from '../../components/promoText'
import Timeline from '../../components/timeline'

import './style.css'

export default function Schedule () {

 return (
  <>
  <div style={{ position: 'fixed', top: '8vh', height: '1500px', width: '100vw', background: '#AE65C8', display: 'none'}}>
   Schedule
   <p>Упсс! Подождите пожалуйста! Мы ещё не закончили настройку странички. Зайдите 1 мая</p>
   <img src={png} alt="Смешная картинка"/>
  </div>
  <div>
   <PromoText text='План Свадьбы'/>
   <div className='schedule__welcome-block'>
    <p className='schedule__welcome-text text_highlight'>Дорогие гости!</p>
    <p className='schedule__welcome-text'>  Для вашего удобства, мы подготовили план нашей свадьбы.
     Мы понимаем, что кто-то захочет посетить выкуп невесты и регистрацию.
     Кому-то, будет удобнее идти на банкет. Пожалуйста, сообщите нам заранее, в какое время вас ждать.
    Нам будет приятно, и мы сможем лучше подговиться)</p>
   </div>
   <Timeline/>
  </div>
  </>
 )
}
