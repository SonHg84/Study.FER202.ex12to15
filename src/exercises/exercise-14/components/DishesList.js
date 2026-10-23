import { useContext } from 'react';
import dishes from '../../../shared/data/dishes';
import { CartContext } from '../context/CartContext';
export default function DishesList() {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="row row-cols-1 row-cols-sm-2 g-3">
      {dishes.map((dish) => (
        <div className="col" key={dish.id}>
          <article className="card h-100">
            <img className="sample-image card-img-top" src={dish.image} alt={dish.name} />
            <div className="card-body">
              <h3 className="h6">
                {dish.name}{' '}
                {dish.label && <span className="badge bg-danger">{dish.label}</span>}
              </h3>
              <p className="small">{dish.description}</p>
              <p>${dish.price}</p>
              <button className="btn btn-primary btn-sm" onClick={() => addToCart(dish)}>
                Add to Cart: {dish.name}
              </button>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
