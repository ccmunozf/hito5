import { useEffect, useState } from 'react'
import { formatPrice } from '../utils/formatPrice'

function Pizza() {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadData() {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001', {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        if (!data || typeof data !== 'object' || !Array.isArray(data.ingredients)) throw new Error('Respuesta inv?lida')
        setPizza(data)
      } catch {
        if (!controller.signal.aborted) {
          setError('No pudimos cargar los datos. Comprueba que el backend est? activo en el puerto 5000 y vuelve a abrir esta vista.')
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadData()
    return () => controller.abort()
  }, [])

  return (
    <main className="pizza-page">
      
      {loading && <p className="api-message" role="status">Cargando pizzas?</p>}
      {error && <p className="api-message" role="alert">{error}</p>}
      {pizza && (
        <article className="pizza-detail">
          <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
          <div className="pizza-detail-content">
            <h1>Pizza {pizza.name}</h1>
            <p>{pizza.desc}</p>
            <h2>Ingredientes</h2>
            <ul>{pizza.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul>
            <p className="price">Precio: ${formatPrice(pizza.price)}</p>
            <button type="button" className="button-dark">A?adir ??</button>
          </div>
        </article>
      )}
    </main>
  )
}

export default Pizza
