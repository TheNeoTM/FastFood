import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import delivery from '../../images/delivery.png'
import tick from '../../images/tick.png'
import cash from '../../images/cash.png'
import './About.css';

export function About() {
    return(
    <div className="about">
        <section className="about__us">
            <div className="about__inner">О компании</div>
            <div className="container1">
            <div className="about__advantages">Обычно люди приходят в Fast Food, чтобы просто поесть. Наши промоутеры раздают листовки за двадцать рублей или ещё что-то выгодное. Мы делаем это как первый шаг, чтобы познакомиться.  Но для нас Fast Food  — не только еда. Это и еда тоже, но в первую очередь это большое дело, которое вдохновляет нас, заставляет каждое утро просыпаться и с интересом продолжать работу. </div>
            </div>
        </section>

        <Accordion defaultActiveKey="0" className="Accordion1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Как работает доставка #1</Accordion.Header>
                <Accordion.Body>
                Доставка работает следующим образом: Посетители сайта выбирают блюда из меню и делают заказ онлайн. Заказы поступают на кухню или в систему обработки заказов, где они подтверждаются и готовятся к выполнению. Повара готовят заказанные блюда в соответствии с запросами клиентов. Готовые блюда упаковываются в специальные контейнеры или упаковки для доставки. Заказы передаются курьерам или службе доставки, которые доставляют их клиентам по указанному адресу. Клиенты могут оплачивать заказы онлайн или при получении. После доставки клиенты могут оставить отзывы и оценки на сайте или через другие каналы связи.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="Accordion2">
                <Accordion.Header>Есть ли в нашем городе #2</Accordion.Header>
                <Accordion.Body>
                На момент моего последнего обновления данных, Fast Food предоставляет свои услуги в ряде крупных городов России. Вот некоторые из них: Москва, Санкт-Петербург, Екатеринбург, Новосибирск, Казань, Самара, Ростов-на-Дону, Нижний Новгород, Уфа, Челябинск, Воронеж, Пермь, Красноярск, Владивосток, Иркутск, Омск, Калининград, Ульяновск, Тюмень, Барнаул.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

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