import './Header.css';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                <Link to="/" className="header__logo">Fast Food</Link>
                    <nav className="header__nav nav">
                        <NavLink to="/" className="nav__link">Главная</NavLink>
                        <NavLink to="/catalog" className="nav__link">Каталог</NavLink>
                        <NavLink to="/about" className="nav__link">О нас</NavLink>
                        <NavLink to="/" className="nav__user"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.3332 35V31.6667C33.3332 29.8985 32.6308 28.2029 31.3805 26.9526C30.1303 25.7024 28.4346 25 26.6665 25H13.3332C11.5651 25 9.86937 25.7024 8.61913 26.9526C7.36888 28.2029 6.6665 29.8985 6.6665 31.6667V35M26.6665 11.6667C26.6665 15.3486 23.6817 18.3333 19.9998 18.3333C16.3179 18.3333 13.3332 15.3486 13.3332 11.6667C13.3332 7.98476 16.3179 4.99999 19.9998 4.99999C23.6817 4.99999 26.6665 7.98476 26.6665 11.6667Z" stroke="#F5F5F5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}