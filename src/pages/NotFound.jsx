import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="auth-page">
      <section className="auth-card not-found" aria-labelledby="not-found-title">
        <p className="not-found-code">404 🍕</p>
        <h1 id="not-found-title">Esta porción no está en el menú</h1>
        <p className="auth-description">La página que buscas no existe. Vuelve al inicio para encontrar tu próxima pizza.</p>
        <Link className="button-link button-dark" to="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

export default NotFound
