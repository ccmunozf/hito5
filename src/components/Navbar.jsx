import { formatPrice } from '../utils/formatPrice'

function Navbar({ page, onNavigate }) {
  const total = 25000
  // Cambia a true para probar el menú de un usuario conectado.
  const token = false

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <span className="brand">Pizzería Mamma Mía!</span>
      <div className="nav-links">
        <button type="button" aria-current={page === 'pizza' ? 'page' : undefined} onClick={() => onNavigate('pizza')}>Pizza p001</button>
        <button type="button" aria-current={page === 'home' ? 'page' : undefined} onClick={() => onNavigate('home')}>🍕 Home</button>
        <button type="button" aria-current={page === 'cart' ? 'page' : undefined} onClick={() => onNavigate('cart')}>Carrito</button>
        {token ? (
          <>
            <button type="button">🔓 Profile</button>
            <button type="button">🔒 Logout</button>
          </>
        ) : (
          <>
            <button type="button" aria-current={page === 'login' ? 'page' : undefined} onClick={() => onNavigate('login')}>🔐 Login</button>
            <button type="button" aria-current={page === 'register' ? 'page' : undefined} onClick={() => onNavigate('register')}>🔐 Register</button>
          </>
        )}
      </div>
      <button type="button" className="cart">🛒 Total: ${formatPrice(total)}</button>
    </nav>
  )
}

export default Navbar
