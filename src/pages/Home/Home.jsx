import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import cosmetic2 from '../../images/cosmetic2.png'
import Carousel from 'react-bootstrap/Carousel';
import delivery from '../../images/delivery.png'
import tick from '../../images/tick.png'
import cash from '../../images/cash.png'
import burgers1 from '../../images/burgers1.jpg'
import burgers2 from '../../images/burgers2.jpg'
import burgers3 from '../../images/burgers3.jpg'
import Accordion from 'react-bootstrap/Accordion';
import { store } from '../../data/store';

export function Home() {

    return (
        <div className="home">
            <h1 className="main-title">Популярные предложения</h1>

            <Carousel>
                <Carousel.Item>
                    <img src={burgers1} alt="FirstSlide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={burgers2} alt="SecondSlide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={burgers3} alt="ThirdSlide" className="d-block w-100" />
                </Carousel.Item>
            </Carousel>

            <section className="catalog">
                <div className="catalog__inner">
                    <div className="catalog_title1">
                        <h2>Каталог</h2>
                    </div>
                    <div className="catalog_products">
                        <div className="products-inner">
                            {store.slice(0, 3).map(product => (
                                <div className="product" key={product.id}>
                                    <img className="product__img" src={product.thumbnail} alt={product.title} />
                                    <div className="product-inner">
                                        <div className="product-bio">
                                            <div className="product-name">
                                                <p>{product.title}</p>
                                            </div>
                                            <div className="prod-descrp">{product.shortdscrp}</div>
                                        </div>
                                        <div className="product-price">
                                            <p>{product.price} $</p>
                                            <Link to={`/product/${product.id}`}>
                                                <button className="btn-price">Купить</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to='/catalog'>
                            <button className='catalog-next'>Перейти к каталогу</button>
                        </Link>
                    </div>
                </div>
            </section>


            <section className="advantages">
                <div className="advantages__inner">
                    <h2>Преимущества</h2>
                    <div className="advantages__list">
                        <div className="advantage">
                            <img className='advantage_img' src={tick} alt="" />
                            <h3>Преимущество №1</h3>
                            <p>Высокое качество продукции и сервисное обслуживание.</p>
                        </div>
                        <div className="advantage">
                            <img className='advantage_img' src={cash} alt="" />
                            <h3>Преимущество №2</h3>
                            <p>Конкурентоспособные цены на весь ассортимент.</p>
                        </div>
                        <div className="advantage">
                            <img className='advantage_img' src={delivery} alt="" />
                            <h3>Преимущество №3</h3>
                            <p>Быстрая доставка по всей стране.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
