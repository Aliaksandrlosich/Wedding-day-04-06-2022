import './style.css'
import { NavLink } from 'react-router-dom'

export default function header () {
 return (
<div className='header'>
   <NavLink to='' className='header__link'>
    Главная
   </NavLink>
   <NavLink to='schedule' className='header__link'>
    План
   </NavLink>
   <NavLink to='contact' className='header__link'>
    Контакты
   </NavLink>
   <NavLink to='photo' className='header__link'>
    Фото
   </NavLink>
</div>
 );
};
