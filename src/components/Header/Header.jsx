import DrawerCart from "../DrowerCart/DrawerCart";
import { NavLink } from "react-router-dom";
import './Header.scss';

export default function Header(){

  return(
    <header className="header">
      <div className='header__bar'>
        <ul className='header__toolbar'>
         <li className="header__toolbar--title">
            <NavLink to={'/'} className='navigatelink'>
              <h2>MSTORE!</h2>
            </NavLink>
         </li>
         <li className="header__toolbar--cart">
            <DrawerCart />  
         </li>
        </ul>
      </div>
    </header>
  )
}