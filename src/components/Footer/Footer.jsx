import { Link, NavLink } from 'react-router-dom';
import './Footer.css';
import Youtube from '../../images/YouTube.png'
import VK from '../../images/VK.png'

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__inner">
                <Link to="/" className="footer__logo">
                <Link to="/" className="footer__logo1">Fast Food</Link>
                <img to="/" className="footer__logo2" src={Youtube}/>
                <img to="/" className="footer__logo2" src={VK}/>
                <p className="footer__logo2024">@2024. Fast Food</p>
                </Link>
                    <nav className="footer__nav nav">
                        <NavLink to="/" className="footer__nav__link">
                            <NavLink to="/" className="footer__nav__link1"><b>Главная</b></NavLink>
                            <NavLink to="/" className="footer__nav__link1">Контакты</NavLink>
                            <NavLink to="/" className="footer__nav__link1">Что такое куки?</NavLink>
                        </NavLink>
                        <NavLink to="/catalog" className="footer__nav__link">
                            <NavLink to="/catalog" className="footer__nav__link1"><b>Каталог</b></NavLink>
                            <NavLink to="/" className="footer__nav__link1">Политика <p> конфиденциальности</p></NavLink>
                        </NavLink>
                        <NavLink to="/about" className="footer__nav__link">
                            <NavLink to="/about" className="footer__nav__link1"><b>О нас</b></NavLink>
                            <NavLink to="/about" className="footer__nav__link1">Ответы на вопросы</NavLink>
                            <NavLink to="/" className="footer__nav__link1">Правила соглашения</NavLink>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </footer>
    );
}