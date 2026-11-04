import { formatPrice } from '../utils/formatPrice'
import { calculateTotal, updateQuantity } from '../utils/cart'

function Cart({ cart, setCart }) {
  const total = calculateTotal(cart)

  function changeQuantity(id, change) {
    setCart((currentCart) => updateQuantity(currentCart, id, change))
  }

  return (
    <main className="cart-page">
      <section className="cart-panel" aria-labelledby="cart-title">
        <h1 id="cart-title">Detalles del pedido</h1>
        <p>Ajusta las cantidades de tus pizzas antes de continuar.</p>
        {cart.length === 0 ? (
          <p className="empty-cart" role="status">Tu carrito está vacío.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((pizza) => (
              <li className="cart-row" key={pizza.id}>
                <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
                <div className="cart-details">
                  <h2>{pizza.name}</h2>
                  <p>${formatPrice(pizza.price)} c/u</p>
                </div>
                <div className="quantity-controls">
                  <button type="button" aria-label={`Disminuir cantidad de ${pizza.name}`} onClick={() => changeQuantity(pizza.id, -1)}>−</button>
                  <span aria-label={`Cantidad de ${pizza.name}`} aria-live="polite">{pizza.count}</span>
                  <button type="button" aria-label={`Aumentar cantidad de ${pizza.name}`} onClick={() => changeQuantity(pizza.id, 1)}>+</button>
                </div>
                <p className="line-total">${formatPrice(pizza.price * pizza.count)}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-summary">
          <p aria-live="polite">Total: <strong>${formatPrice(total)}</strong></p>
          <button type="button" className="button-dark" disabled={cart.length === 0}>Pagar</button>
        </div>
      </section>
    </main>
  )
}

export default Cart
