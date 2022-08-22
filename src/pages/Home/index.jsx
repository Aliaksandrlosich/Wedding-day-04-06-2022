import PromoText from '../../components/promoText'

export default function Home () {

 return (
  <div>
   <PromoText text='04 июня 2022'/>
   <h1>Дорогие гости!</h1>
   <p className='photo-page__text'>
    Рады приветствовать вас! Для вашего удобства, мы собрали всю важную информацию на этом сайте!
   </p>
   <p className='photo-page__text'>Свадьба будет проходить в городе Пинске! Если вы не сможете прийти, пожалуйста, предупредите нас заранее!</p>
   <p className='photo-page__text'>По возможности, не приносите живые букеты цветов! Через пару дней, мы уедем в Минск, и не успеем насладиться ими,
    а так же забрать все с собой. Если ходите что-то вручить, можете подарить что-то другое. Мягкие игрушки, сладости,
    алкоголь, и т.д.</p>
    <p className='contact__number-label'> Фотографии Готовы!</p>
    <a className='photo__link' href='https://disk.yandex.by/d/KjYUU-pltn1MVg' target="_blank">Ссылка на фотографии</a>
  </div>
 )
}
