import png from '../../oops.jpg'

import './style.css'

export default function Photo () {

 return (
  <div style={{ position: 'fixed', top: '8vh', height: '1500px', width: '100vw', background: '#AE65C8' }}>
   Photo
   <p>Упсс! Подождите пожалуйста! Мы ещё не закончили настройку странички. Зайдите 1 мая</p>
   <img src={png} alt="Смешная картинка"/>
  </div>
 )
}
