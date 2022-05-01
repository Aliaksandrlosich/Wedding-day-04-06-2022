import png from '../../oops.jpg'

export default function Home () {

 return (
  <div style={{ position: 'fixed', top: '8vh', height: '1500px', width: '100vw', background: '#AE65C8' }}>
   Home
   <p>Упсс! Подождите пожалуйста! Мы ещё не закончили настройку странички. Зайдите 1 мая. Остальные странички готовы!</p>
   <img src={png} alt="Смешная картинка"/>
  </div>
 )
}
