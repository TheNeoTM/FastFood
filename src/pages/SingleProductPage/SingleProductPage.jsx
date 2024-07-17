import { store } from '../../data/store';
import './SingleProductPage.css';
import { useParams } from 'react-router-dom';

export function SingleProductPage() {
    const { id } = useParams();
    const product = store.find(product => product.id == id);

    return (
        <section className='prod'>
            <div className="prod-img">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="prod-inner">
                <div className="prod-body">
                    <h1 className="prod-title">{product.title}</h1>
                    <p className="prod-descrp">{product.description}</p>
                </div>
                <div className="prod-price">
                    <div className="price">{product.price} $</div>
                    <button className="btn_price">Купить</button>
                </div>
            </div>
        </section>
    );
}

export default SingleProductPage;