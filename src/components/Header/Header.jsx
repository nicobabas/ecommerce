import './Header.css'
import logotl from '../../assets/images/logotl.png'
import React, {useState} from 'react'


const Header = () => {
const [isActive, setActive] = useState(false);
const handleToggle = () => {
    setActive(!isActive);
  };
return (
    <header className="header">
        <div className="head-left">
        <img src={logotl} alt="logo"/>
        <h1 className="head-title">TechnoLearn</h1>
        </div>
        <nav>
            <ul>
                <li><a href="">Category 1</a></li>
                <li><a href="">Category 2</a></li>
                <li><a href="">Category 3</a></li>
            </ul>
            <ul>
                <li><input type="text" className={isActive ? "is-displayed" : null}/><i className="fas fa-search" onClick={handleToggle}></i></li>
                <li><i class="fas fa-shopping-cart"></i>Cart ({count})</li>
            </ul>
        </nav>
        
    </header>
);
}


export default Header;
