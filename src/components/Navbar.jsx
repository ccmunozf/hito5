import { Link, useLocation } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'

const links = [
  ['/', '🍕 Home'],
  ['/register', '🔐 Register'],
  ['/login', '🔐 Login'],
  ['/cart', 'Carrito'],
  ['/profile', '🔓 Profile'],
  ['/404', '404'],
]

function Navbar() {
  const total = 25000
  const { pathname } = useLocation()

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <span className="brand">Pizzería Mamma Mía!</span>
      <div className="nav-links">
        {links.map(([path, label]) => (
          <Link key={path} to={path} aria-current={pathname === path ? 'page' : undefined}>{label}</Link>
        ))}
      </div>
      <Link to="/cart" className="cart">🛒 Total: ${formatPrice(total)}</Link>
    </nav>
  )
}

export default Navbar
